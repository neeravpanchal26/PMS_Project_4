import {Component, OnInit, ViewChild} from '@angular/core';

// Custom imports
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ManageSupplierService} from './manage-supplier.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {IUser} from '../../It Admin/manage-users/manage-users.service';

@Component({
    selector: 'app-manage-supplier',
    templateUrl: './manage-supplier.component.html',
    styleUrls: ['./manage-supplier.component.css']
})
export class ManageSupplierComponent implements OnInit {
    // Data Table
    dataSource: MatTableDataSource<any>;
    displayedColumns: string[] = ['Name', 'contactNumber', 'email', 'Active', 'edit'];
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    // Default constructor
    constructor(private service: ManageSupplierService,
                private snackBar: SnackbarNotificationService) {
    }

    // Form load
    ngOnInit() {
        // Load suppliers
        this.service.GetSuppliers()
            .subscribe(
                data => {
                    this.dataSource = new MatTableDataSource<any>(data);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                },
                error => this.snackBar.handleError(error)
            );
    }

    // Change supplier status
    ChangeSupplierStatus(newStatus, supplierID, supplierName) {
        let localStatus;
        if (newStatus === true) {
            localStatus = 1;
        } else if ((newStatus === false)) {
            localStatus = 0;
        }

        const param: IUser = {
            userID: supplierID,
            status: localStatus
        };

        this.service.SupplierStatus(param)
            .subscribe(
                data => {
                    if (data === true) {
                        if (newStatus === true) {
                            this.snackBar.SupplierStatusActivated(supplierName);
                        } else if (newStatus === false) {
                            this.snackBar.SupplierStatusDeactivated(supplierName);
                        }
                    }
                },
                error => this.snackBar.handleError(error)
            );
    }

    // Search filter
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}

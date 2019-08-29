import {Component, OnInit, ViewChild} from '@angular/core';

// Custom imports
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ManageOwnerService} from './manage-owner.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {IUser} from '../../It Admin/manage-users/manage-users.service';

@Component({
    selector: 'app-manage-owner',
    templateUrl: './manage-owner.component.html',
    styleUrls: ['./manage-owner.component.css']
})
export class ManageOwnerComponent implements OnInit {
    // Global variable

    // Data Table
    dataSource: MatTableDataSource<any>;
    displayedColumns: string[] = ['owner', 'ContactNumber', 'Email', 'Active', 'edit'];
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    // Default constructor
    constructor(private service: ManageOwnerService,
                private snackBar: SnackbarNotificationService) {
    }

    // Form load
    ngOnInit() {
        // Load owners
        this.service.GetOwners()
            .subscribe(
                data => {
                    this.dataSource = new MatTableDataSource<any>(data);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                },
                error => this.snackBar.handleError(error)
            );
    }

    // Change owner status
    ChangeOwnerStatus(newStatus, ownerID, ownerName) {
        let localStatus;
        if (newStatus === true) {
            localStatus = 1;
        } else if ((newStatus === false)) {
            localStatus = 0;
        }

        const param: IUser = {
            userID: ownerID,
            status: localStatus
        };

        this.service.OwnerStatus(param)
            .subscribe(
                data => {
                    if (data === true) {
                        if (newStatus === true) {
                            this.snackBar.OwnerStatusActivated(ownerName);
                        } else if (newStatus === false) {
                            this.snackBar.OwnerStatusDeactivated(ownerName);
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

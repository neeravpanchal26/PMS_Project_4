import {Component, OnInit, ViewChild} from '@angular/core';

// Custom imports
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ManageOwnerService} from './manage-owner.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';

@Component({
    selector: 'app-manage-owner',
    templateUrl: './manage-owner.component.html',
    styleUrls: ['./manage-owner.component.css']
})
export class ManageOwnerComponent implements OnInit {
    // Global variable

    // Data Table
    dataSource: MatTableDataSource<any>;
    displayedColumns: string[] = ['OwnerID', 'owner', 'ContactNumber', 'Active', 'edit'];
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

    // Search filter
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}

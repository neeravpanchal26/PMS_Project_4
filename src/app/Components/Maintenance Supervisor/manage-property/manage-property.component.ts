import {Component, OnInit, ViewChild} from '@angular/core';

// Custom imports
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ManagePropertyService} from './manage-property.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';


@Component({
    selector: 'app-manage-property',
    templateUrl: './manage-property.component.html',
    styleUrls: ['./manage-property.component.css']
})
export class ManagePropertyComponent implements OnInit {
    // Global variable

    // Data Table
    dataSource: MatTableDataSource<any>;
    displayedColumns: string[] = ['PropertyID', 'Name', 'Address1', 'ResidenceTypeDesc', 'Owner', 'Desc', 'Assign'];
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    // Default constructor
    constructor(private service: ManagePropertyService,
                private snackBar: SnackbarNotificationService) {
    }

    // Form load
    ngOnInit() {
        // Load property
        this.service.GetProperties()
            .subscribe(data => {
                    this.dataSource = new MatTableDataSource<any>(data);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                },
                error => this.snackBar.handleError(error));
    }

    // Search filter
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}

import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

// Custom imports
import {CreateUserService} from '../create-user/create-user.service';
import {UpdatePersonalInfoService} from '../../Default/update-personal-info/update-personal-info.service';
import {UserReportsService} from './user-reports.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
    selector: 'app-user-reports',
    templateUrl: './user-reports.component.html',
    styleUrls: ['./user-reports.component.css']
})
export class UserReportsComponent implements OnInit {
    // Global variable
    public userTypes: any;
    public cities: any;
    public suburbs: any;
    public typeDesc: any;
    public cityName: any;
    public suburbName: any;

    // Data Table
    dataSource: MatTableDataSource<any>;
    displayedColumns: string[] = ['UserID', 'username', 'ContactNumber', 'UserTypeDesc', 'CityName', 'SuburbName'];
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    // Default constructor
    constructor(private service: UserReportsService,
                private CService: CreateUserService,
                private UService: UpdatePersonalInfoService,
                private snackBar: SnackbarNotificationService) {
    }

    // Form load
    ngOnInit() {
        // Reset parameters
        this.typeDesc = '';
        this.cityName = '';
        this.suburbName = '';

        // User load up
        this.service.GetUserReport(this.typeDesc, this.cityName, this.suburbName)
            .subscribe(
                data => {
                    this.dataSource = new MatTableDataSource<any>(data);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                },
                error => this.snackBar.handleError(error)
            );

        // User type load up
        this.CService.GetUserType()
            .subscribe(
                data => this.userTypes = data,
                error => this.snackBar.handleError(error)
            );

        // City load up
        this.CService.GetCity()
            .subscribe(
                data => this.cities = data,
                error => this.snackBar.handleError(error)
            );

        // Suburb load up
        this.UService.GetAllSuburbs()
            .subscribe(
                data => this.suburbs = data,
                error => this.snackBar.handleError(error)
            );
    }

    // Filter
    FilterUserReport(typeDesc, cityName, suburbName) {
        if (typeDesc != null) {
            this.typeDesc = typeDesc;
        } else if (cityName != null) {
            this.cityName = cityName;
        } else if (suburbName != null) {
            this.suburbName = suburbName;
        }

        // User load up
        this.service.GetUserReport(this.typeDesc, this.cityName, this.suburbName)
            .subscribe(
                data => {
                    this.dataSource = new MatTableDataSource<any>(data);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                },
                error => this.snackBar.handleError(error)
            );
    }
}

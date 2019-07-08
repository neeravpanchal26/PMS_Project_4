import {Component, OnInit, ViewChild} from '@angular/core';

// Custom imports
import {IUser, ManageUsersService} from './manage-users.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {LoginService} from '../../../Global Services/login.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';
import {CreateUserService} from '../create-user/create-user.service';

@Component({
    selector: 'app-manage-users',
    templateUrl: './manage-users.component.html',
    styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
    // Global variable
    public userType: any;

    // Data Table
    dataSource: MatTableDataSource<any>;
    displayedColumns: string[] = ['username', 'Email', 'Type', 'Active', 'reset'];
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    // Default constructor
    constructor(private service: ManageUsersService,
                private lService: LoginService,
                private snackBar: SnackbarNotificationService,
                private CService: CreateUserService) {
    }

    // Form load
    ngOnInit() {
        // Load users
        this.service.GetUsers(this.lService.GetUserID())
            .subscribe(
                data => {
                    this.dataSource = new MatTableDataSource<any>(data);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                },
                error => this.snackBar.handleError(error)
            );

        // Load user types
        this.CService.GetUserType()
            .subscribe(
                data => this.userType = data,
                error => this.snackBar.handleError(error)
            );
    }

    // Change user type
    ChangeUserType(newType, userId, userName) {
        const param: IUser = {
            userID: userId,
            status: newType
        };

        this.service.ChangeUserType(param)
            .subscribe(
                data => {
                    if (data === true) {
                        this.snackBar.UserRoleChangeSuccess(userName);
                    }
                },
                error => this.snackBar.handleError(error)
            );
    }

    // Change user status
    ChangeUserStatus(newStatus, userId, userName) {
        let localStatus;
        if (newStatus === true) {
            localStatus = 1;
        } else if (newStatus === false) {
            localStatus = 0;
        }

        const param: IUser = {
            userID: userId,
            status: localStatus
        };

        this.service.ChangeUserStatus(param)
            .subscribe(
                data => {
                    if (data === true) {
                        if (newStatus === true) {
                            this.snackBar.UserStatusActivated(userName);
                        } else if (newStatus === false) {
                            this.snackBar.UserStatusDeactivated(userName);
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

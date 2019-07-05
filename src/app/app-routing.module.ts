// Default imports
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Guard Import
import {LoginGuard} from './Components/login/login.guard';

// Global Service imports
import {LoginService} from './Components/login/login.service';
import {SnackbarNotificationService} from './Global Services/snackbar-notification.service';

// Custom component imports
import {LoginComponent} from './Components/login/login.component';
import {HeaderComponent} from './Components/header/header.component';
import {FooterComponent} from './Components/footer/footer.component';
import {DashboardItTechnicianComponent} from './Components/dashboard-it-technician/dashboard-it-technician.component';
import {CreateUserComponent} from './Components/create-user/create-user.component';
import {ManageUsersComponent} from './Components/manage-users/manage-users.component';
import {ErrorComponent} from './Components/error/error.component';
import {ChangePasswordComponent} from './Components/change-password/change-password.component';
import {ResetPasswordComponent} from './Components/reset-password/reset-password.component';
import {UpdatePersonalInfoComponent} from './Components/update-personal-info/update-personal-info.component';

// Routing Array
const routes: Routes = [
    // Default component
    {path: '', component: LoginComponent},
    {path: 'Change_Password', canActivate: [LoginGuard], component: ChangePasswordComponent},
    {path: 'Update_Personal_Information', canActivate: [LoginGuard], component: UpdatePersonalInfoComponent},

    // IT Technician component
    {path: 'Dashboard_It_Technician', canActivate: [LoginGuard], component: DashboardItTechnicianComponent},
    {path: 'Create_User', canActivate: [LoginGuard], component: CreateUserComponent},
    {path: 'Manage_Users', canActivate: [LoginGuard], component: ManageUsersComponent},
    {path: 'Reset_Password/:userID', canActivate: [LoginGuard], component: ResetPasswordComponent},

    {path: '**', component: ErrorComponent}// Always keep this last!!
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [SnackbarNotificationService,
        LoginGuard,
        LoginService
    ]
})
export class AppRoutingModule {
}

export const routingComponents = [
    // Default Component
    ErrorComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardItTechnicianComponent,
    CreateUserComponent,
    ManageUsersComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    UpdatePersonalInfoComponent
];

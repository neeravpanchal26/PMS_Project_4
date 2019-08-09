import {NgModule} from '@angular/core';
// Custom imports
import {RouterModule, Routes} from '@angular/router';
// Global imports
import {LoginGuard} from './Global Services/login.guard';
import {LoginService} from './Global Services/login.service';
import {SnackbarNotificationService} from './Global Services/snackbar-notification.service';
// Custom component imports
// Default
import {ChangePasswordComponent} from './Components/Default/change-password/change-password.component';
import {ErrorComponent} from './Components/Default/error/error.component';
import {FooterComponent} from './Components/Default/footer/footer.component';
import {HeaderComponent} from './Components/Default/header/header.component';
import {LoginComponent} from './Components/Default/login/login.component';
import {UpdatePersonalInfoComponent} from './Components/Default/update-personal-info/update-personal-info.component';
// It Admin components
import {BusinessSettingsComponent} from './Components/It Admin/business-settings/business-settings.component';
import {CreateUserComponent} from './Components/It Admin/create-user/create-user.component';
import {DashboardItTechnicianComponent} from './Components/It Admin/dashboard-it-technician/dashboard-it-technician.component';
import {ManageUsersComponent} from './Components/It Admin/manage-users/manage-users.component';
import {ResetPasswordComponent} from './Components/It Admin/reset-password/reset-password.component';
import {UserReportsComponent} from './Components/It Admin/user-reports/user-reports.component';
// Maintenance supervisor component
import {AddPropertyComponent} from './Components/Maintenance Supervisor/add-property/add-property.component';
import {CreateOwnerComponent} from './Components/Maintenance Supervisor/create-owner/create-owner.component';
import {DashboardMaintenanceSupervisorComponent} from './Components/Maintenance Supervisor/dashboard-maintenance-supervisor/dashboard-maintenance-supervisor.component';
import {ManageOwnerComponent} from './Components/Maintenance Supervisor/manage-owner/manage-owner.component';
import {UpdateOwnerInfoComponent} from './Components/Maintenance Supervisor/update-owner-info/update-owner-info.component';
import {ManagePropertyComponent} from './Components/Maintenance Supervisor/manage-property/manage-property.component';


// Routing Array
const routes: Routes = [
    // Default component
    {path: '', component: LoginComponent},
    {path: 'Change_Password', canActivate: [LoginGuard], component: ChangePasswordComponent},
    {path: 'Update_Personal_Information', canActivate: [LoginGuard], component: UpdatePersonalInfoComponent},

    // IT Technician component
    {path: 'Business_Information', canActivate: [LoginGuard], component: BusinessSettingsComponent},
    {path: 'Create_User', canActivate: [LoginGuard], component: CreateUserComponent},
    {path: 'Dashboard_It_Admin', canActivate: [LoginGuard], component: DashboardItTechnicianComponent},
    {path: 'Manage_Users', canActivate: [LoginGuard], component: ManageUsersComponent},
    {path: 'Reset_Password/:userID', canActivate: [LoginGuard], component: ResetPasswordComponent},
    {path: 'User_Reports', canActivate: [LoginGuard], component: UserReportsComponent},

    // Maintenance supervisor component
    {path: 'Add_Property', canActivate: [LoginGuard], component: AddPropertyComponent},
    {path: 'Create_Owner', canActivate: [LoginGuard], component: CreateOwnerComponent},
    {path: 'Dashboard_Supervisor', canActivate: [LoginGuard], component: DashboardMaintenanceSupervisorComponent},
    {path: 'Manage_Owners', canActivate: [LoginGuard], component: ManageOwnerComponent},
    {path: 'Manage_Property', canActivate: [LoginGuard], component: ManagePropertyComponent},
    {path: 'Update_Owner_Information/:ownerID', canActivate: [LoginGuard], component: UpdateOwnerInfoComponent},

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
    ChangePasswordComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    UpdatePersonalInfoComponent,

    // It Admin
    BusinessSettingsComponent,
    CreateUserComponent,
    DashboardItTechnicianComponent,
    ManageUsersComponent,
    ResetPasswordComponent,
    UserReportsComponent,

    // Maintenance supervisor
    AddPropertyComponent,
    CreateOwnerComponent,
    DashboardMaintenanceSupervisorComponent,
    ManageOwnerComponent,
    ManagePropertyComponent,
    UpdateOwnerInfoComponent
];

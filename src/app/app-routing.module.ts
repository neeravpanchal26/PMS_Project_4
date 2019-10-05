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
import {AssignComplaintComponent} from './Components/Maintenance Supervisor/assign-complaint/assign-complaint.component';
import {AssignPropertyComponent} from './Components/Maintenance Supervisor/assign-property/assign-property.component';
import {CreateOwnerComponent} from './Components/Maintenance Supervisor/create-owner/create-owner.component';
import {CreateSupplierComponent} from './Components/Maintenance Supervisor/create-supplier/create-supplier.component';
import {DashboardMaintenanceSupervisorComponent} from './Components/Maintenance Supervisor/dashboard-maintenance-supervisor/dashboard-maintenance-supervisor.component';
import {ManageOwnerComponent} from './Components/Maintenance Supervisor/manage-owner/manage-owner.component';
import {ManagePropertyComponent} from './Components/Maintenance Supervisor/manage-property/manage-property.component';
import {ManageSupplierComponent} from './Components/Maintenance Supervisor/manage-supplier/manage-supplier.component';
import {UpdateComplaintComponent} from './Components/Maintenance Supervisor/update-complaint/update-complaint.component';
import {UpdateOwnerInfoComponent} from './Components/Maintenance Supervisor/update-owner-info/update-owner-info.component';
import {UpdatePropertyComponent} from './Components/Maintenance Supervisor/update-property/update-property.component';
import {UpdateSupplierInfoComponent} from './Components/Maintenance Supervisor/update-supplier-info/update-supplier-info.component';

// Tenant component
import {ComplaintStatusTrackComponent} from './Components/Tenant/complaint-status-track/complaint-status-track.component';
import {DashboardTenantComponent} from './Components/Tenant/dashboard-tenant/dashboard-tenant.component';
import {ReportComplaintComponent} from './Components/Tenant/report-complaint/report-complaint.component';
import {componentFactoryName} from '@angular/compiler';

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
    {path: 'Assign_Complaint', canActivate: [LoginGuard], component: AssignComplaintComponent},
    {path: 'Assign_Property', canActivate: [LoginGuard], component: AssignPropertyComponent},
    {path: 'Create_Owner', canActivate: [LoginGuard], component: CreateOwnerComponent},
    {path: 'Create_Supplier', canActivate: [LoginGuard], component: CreateSupplierComponent},
    {path: 'Dashboard_Supervisor', canActivate: [LoginGuard], component: DashboardMaintenanceSupervisorComponent},
    {path: 'Manage_Owners', canActivate: [LoginGuard], component: ManageOwnerComponent},
    {path: 'Manage_Property', canActivate: [LoginGuard], component: ManagePropertyComponent},
    {path: 'Manage_Supplier', canActivate: [LoginGuard], component: ManageSupplierComponent},
    {path: 'Update_Complaint', canActivate: [LoginGuard], component: UpdateComplaintComponent},
    {path: 'Update_Owner_Information/:ownerID', canActivate: [LoginGuard], component: UpdateOwnerInfoComponent},
    {path: 'Update_Property_Information/:propertyID', canActivate: [LoginGuard], component: UpdatePropertyComponent},
    {path: 'Update_Supplier_Information/:supID', canActivate: [LoginGuard], component: UpdateSupplierInfoComponent},

    // Tenant component
    {path: 'Complaint_Status_Track', canActivate: [LoginGuard], component: ComplaintStatusTrackComponent},
    {path: 'Dashboard_Tenant', canActivate: [LoginGuard], component: DashboardTenantComponent},
    {path: 'Report_Complaint', canActivate: [LoginGuard], component: ReportComplaintComponent},

    {path: '**', component: ErrorComponent}, // Always keep this last!!
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
    AssignComplaintComponent,
    AssignPropertyComponent,
    CreateOwnerComponent,
    CreateSupplierComponent,
    DashboardMaintenanceSupervisorComponent,
    ManageOwnerComponent,
    ManagePropertyComponent,
    ManageSupplierComponent,
    UpdateComplaintComponent,
    UpdateOwnerInfoComponent,
    UpdatePropertyComponent,
    UpdateSupplierInfoComponent,

    // Tenant
    ComplaintStatusTrackComponent,
    DashboardTenantComponent,
    ReportComplaintComponent
];

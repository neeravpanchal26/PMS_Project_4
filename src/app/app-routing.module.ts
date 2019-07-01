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

// Routing Array
const routes: Routes = [
    // Default component
    {path: '', component: LoginComponent},
    {path: 'Dashboard_It_Technician', canActivate: [LoginGuard], component: DashboardItTechnicianComponent},

    // IT Technician component
    {path: 'Create_User', canActivate: [LoginGuard], component: CreateUserComponent}
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
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardItTechnicianComponent,
    CreateUserComponent
];

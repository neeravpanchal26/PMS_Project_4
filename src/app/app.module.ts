import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Import modules here
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {NgImageSliderModule} from 'ng-image-slider';
import {DatePipe} from '@angular/common';
import { OwnerReportsComponent } from './Components/Maintenance Supervisor/maintenance-reports/owner-reports/owner-reports.component';
import { ComplaintReportComponent } from './Components/Maintenance Supervisor/maintenance-reports/complaint-report/complaint-report.component';
import { ComplaintHistoryReportComponent } from './Components/Maintenance Supervisor/maintenance-reports/complaint-history-report/complaint-history-report.component';

@NgModule({
    declarations: [
        AppComponent,
        routingComponents,
        OwnerReportsComponent,
        ComplaintReportComponent,
        ComplaintHistoryReportComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        NgImageSliderModule,
        MatPasswordStrengthModule.forRoot()
    ],
    providers: [DatePipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}

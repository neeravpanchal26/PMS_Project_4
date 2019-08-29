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


@NgModule({
    declarations: [
        AppComponent,
        routingComponents
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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

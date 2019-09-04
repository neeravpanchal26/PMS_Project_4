import {NgModule} from '@angular/core';
import {
    MAT_DATE_LOCALE,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableExporterModule} from 'mat-table-exporter';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatSidenavModule,
        MatSelectModule,
        MatMenuModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatGridListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSlideToggleModule,
        MatDialogModule,
        MatDividerModule,
        MatTableExporterModule,
        MatRadioModule,
        MatExpansionModule,
        MatStepperModule,
        MatRippleModule,
        MatFormFieldModule],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatSidenavModule,
        MatSelectModule,
        MatMenuModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatGridListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSlideToggleModule,
        MatDialogModule,
        MatDividerModule,
        MatTableExporterModule,
        MatRadioModule,
        MatExpansionModule,
        MatStepperModule,
        MatRippleModule,
        MatFormFieldModule],
    providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-ZA'}]
})
export class MaterialModule {
}

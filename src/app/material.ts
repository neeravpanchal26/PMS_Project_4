import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import {MatSortModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MAT_DATE_LOCALE} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableExporterModule} from 'mat-table-exporter';

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
        MatFormFieldModule],
    providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-ZA'}]
})
export class MaterialModule {
}

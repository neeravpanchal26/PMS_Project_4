import {Component, OnInit, ViewChild} from '@angular/core';

// Custom imports
import {AddPropertyService} from '../../add-property/add-property.service';
import {SnackbarNotificationService} from '../../../../Global Services/snackbar-notification.service';
import {CreateUserService} from '../../../It Admin/create-user/create-user.service';
import {MaintenanceReportsService} from '../maintenance-reports.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ExcelExporterService} from '../../../../Global Services/excel-exporter.service';
import {BusinessSettingsService} from '../../../It Admin/business-settings/business-settings.service';
import {ImageRetrieveService} from '../../../../Global Services/image-retrieve.service';
import {Images} from '../../assign-property/assign-property.component';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-owner-reports',
    templateUrl: './owner-reports.component.html',
    styleUrls: ['./owner-reports.component.css']
})
export class OwnerReportsComponent implements OnInit {
    // Global variable
    public owners;
    public cities;
    public suburbs;
    public filterForm: FormGroup;

    // Sorting variables
    public ownerName = '';
    public suburbName = '';
    public cityName = '';
    public startDate = '';
    public endDate = new Date(new Date().setDate(new Date().getDate() + 1));

    // Data Table
    dataSource: MatTableDataSource<any>;
    displayedColumns: string[] = ['Name', 'Address1', 'Address2', 'SuburbName', 'CityName', 'ownerFullName', 'totalComplaint'];
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(private AUService: CreateUserService,
                private BService: BusinessSettingsService,
                private EService: ExcelExporterService,
                private APService: AddPropertyService,
                private IService: ImageRetrieveService,
                private service: MaintenanceReportsService,
                private formBuilder: FormBuilder,
                private snackBar: SnackbarNotificationService) {
    }

    ngOnInit() {
        // Filter Validation
        this.filterForm = this.formBuilder.group({
            owner: [],
            city: [],
            suburb: [],
            startDate: [],
            endDate: []
        });

        this.Reset();
    }

    // Reset Form
    Reset() {
        // Reset Variables
        this.ownerName='';
        this.suburbName='';
        this.cityName='';
        this.startDate='';
        this.endDate = new Date(new Date().setDate(new Date().getDate() + 1));

        // Owner Load up
        this.APService.getOwner()
            .subscribe(data => this.owners = data, error => this.snackBar.handleError(error));

        // City Load up
        this.AUService.GetCity()
            .subscribe(data => this.cities = data, error => this.snackBar.handleError(error));

        this.GetProperty();
    }

    // Suburb Load up
    suburbLoad(cityID) {
        this.AUService.GetSuburb(cityID)
            .subscribe(
                data => {
                    this.suburbs = data;
                },
                error => this.snackBar.handleError(error)
            );
    }

    // Filter Property
    FilterPropertyReport(owner, suburb, city, startDate, endDate) {
        if (owner !== null) {
            this.ownerName = owner;
        } else if (suburb !== null) {
            this.suburbName = suburb;
        } else if (city !== null) {
            this.cityName = city.source.selected.viewValue;
        } else if (startDate !== null) {
            this.startDate = startDate;
        } else if (endDate !== null) {
            this.endDate = endDate;
        }

        this.GetProperty();
    }

    // Property Load up
    GetProperty() {
        this.service.GetPropertyReport(this.ownerName, this.suburbName, this.cityName, this.startDate, this.endDate)
            .subscribe(data => {
                this.dataSource = new MatTableDataSource<any>(data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }, error => this.snackBar.handleError(error));
    }

    ExportToExcel(DataToExport) {
        // Headers
        const headers = ['Property Name', 'Address 1', 'Address 2', 'Suburb', 'City', 'Owner', 'Complaints Reported'];

        // Sub Headers
        let subHeader = '';
        if (this.ownerName != null) {
            subHeader += ' Owner : ' + this.ownerName + '\r\n';
        }
        if (this.suburbName != null) {
            subHeader += ' Suburb: ' + this.suburbName + '\r\n';
        }
        if (this.cityName != null) {
            subHeader += ' City: ' + this.cityName + '\r\n';
        }
        if (this.startDate != null) {
            subHeader += ' Between: ' + this.startDate + ' & ' + this.endDate;
        }

        // Converting to array
        const DataArray = [];
        DataToExport.forEach((x) => {
            DataArray.push({
                'Property Name': x.Name,
                'Address 1': x.Address1,
                'Address 2': x.Address2,
                'Suburb': x.SuburbName,
                'City': x.CityName,
                'Owner': x.ownerFullName,
                'Complaints Reported': x.totalComplaint
            });
        });

        // Business Data
        this.BService.GetBusinessInfo()
            .subscribe(data => {
                const image = [];
                this.IService.GetBusinessLogo().subscribe(next => {
                    const img = new Images();
                    const reader = new FileReader();
                    reader.readAsDataURL(next);
                    reader.onloadend = (readerEvt: any) => {
                        img.image = readerEvt.target.result;
                        img.title = 'BusinessLogo';
                        image.push(img);
                        this.EService.ExportToExcel(data, 'Property Report', headers, DataArray, image, subHeader);
                    };
                });
            });
    }
}

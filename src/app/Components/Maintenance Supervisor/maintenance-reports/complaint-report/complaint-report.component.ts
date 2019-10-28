import {Component, OnInit, ViewChild} from '@angular/core';

// Custom imports
import {AssignPropertyService} from '../../assign-property/assign-property.service';
import {SnackbarNotificationService} from '../../../../Global Services/snackbar-notification.service';
import {ReportComplaintService} from '../../../Tenant/report-complaint/report-complaint.service';
import {AddPropertyService} from '../../add-property/add-property.service';
import {MaintenanceReportsService} from '../maintenance-reports.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Images} from '../../assign-property/assign-property.component';
import {BusinessSettingsService} from '../../../It Admin/business-settings/business-settings.service';
import {ExcelExporterService} from '../../../../Global Services/excel-exporter.service';
import {ImageRetrieveService} from '../../../../Global Services/image-retrieve.service';

@Component({
    selector: 'app-complaint-report',
    templateUrl: './complaint-report.component.html',
    styleUrls: ['./complaint-report.component.css']
})
export class ComplaintReportComponent implements OnInit {
    // Global variables
    public properties;
    public tenants;
    public categories;
    public subCategories;
    public owners;
    public complaintStatus;

    // Sorting variables
    public propName = '';
    public tenantName = '';
    public subCat = '';
    public cat = '';
    public ownerName = '';
    public statusName = '';
    public startDate = '';
    public endDate = new Date(new Date().setDate(new Date().getDate() + 1));

    // Data Table
    dataSource: MatTableDataSource<any>;
    displayedColumns: string[] = ['Date', 'Desc'];
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    // Default constructor
    constructor(private snackBar: SnackbarNotificationService,
                private AService: AssignPropertyService,
                private BService: BusinessSettingsService,
                private EService: ExcelExporterService,
                private IService: ImageRetrieveService,
                private RService: ReportComplaintService,
                private APService: AddPropertyService,
                private MService: MaintenanceReportsService) {
    }

    // Form load
    ngOnInit() {
        // Property Load up
        this.AService.GetProperty()
            .subscribe(data => this.properties = data, error => this.snackBar.handleError(error));

        // Tenant load up
        this.AService.GetTenant()
            .subscribe(data => this.tenants = data, error => this.snackBar.handleError(error));

        // Category
        this.RService.GetCategory()
            .subscribe(data => this.categories = data, error => this.snackBar.handleError(error));

        // Owner load up
        this.APService.getOwner()
            .subscribe(data => this.owners = data, error => this.snackBar.handleError(error));

        // Complaint Status
        this.MService.GetComplaintStatus()
            .subscribe(data => this.complaintStatus = data, error => this.snackBar.handleError(error));

        this.GetComplaint();
    }

    // Sub Category load up
    SubCategory(catID) {
        this.RService.GetSubCategory(catID)
            .subscribe(data => this.subCategories = data, error => this.snackBar.handleError(error));
    }

    // Filter Complaint
    FilterComplaint(propName, tenantName, subCat, cat, ownerName, statusName, startDate, endDate) {
        if (propName != null) {
            this.propName = propName;
        } else if (tenantName != null) {
            this.tenantName = tenantName;
        } else if (subCat != null) {
            this.subCat = subCat;
        } else if (cat != null) {
            this.cat = cat.source.selected.viewValue;
        } else if (ownerName != null) {
            this.ownerName = ownerName;
        } else if (statusName != null) {
            this.statusName = statusName;
        } else if (startDate != null) {
            this.startDate = startDate;
        } else if (endDate != null) {
            this.endDate = endDate;
        }

        this.GetComplaint();
    }

    // Complaint Load up
    GetComplaint() {
        this.MService.GetComplaint(this.propName, this.tenantName, this.subCat, this.cat, this.ownerName, this.statusName, this.startDate, this.endDate)
            .subscribe(data => {
                this.dataSource = new MatTableDataSource<any>(data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }, error => this.snackBar.handleError(error));
    }

    ExportToExcel(DataToExport) {
        // Headers
        const headers = ['Complaint Date', 'Complaint Date'];

        // Sub Headers
        let subHeader = '';
        if (this.propName !== '') {
            subHeader += 'Property: ' + this.propName + '\r\n';
        }
        if (this.tenantName !== '') {
            subHeader += 'Tenant: ' + this.tenantName + '\r\n';
        }
        if (this.subCat !== '') {
            subHeader += 'Sub Category: ' + this.subCat + '\r\n';
        }
        if (this.cat !== '') {
            subHeader += 'Category: ' + this.cat + '\r\n';
        }
        if (this.ownerName !== '') {
            subHeader += 'Owner: ' + this.ownerName + '\r\n';
        }
        if (this.statusName !== '') {
            subHeader += 'Complaint Status: ' + this.statusName + '\r\n';
        }
        if (this.startDate !== '') {
            subHeader += 'Between: ' + this.startDate + ' & ' + this.endDate;
        }

        // Converting to array
        const DataArray = [];
        DataToExport.forEach((x) => {
            DataArray.push({
                'Complaint Date': x.Date,
                'Complaint Desc': x.Desc
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
                        this.EService.ExportToExcel(data, 'Complaint Report', headers, DataArray, image, subHeader);
                    };
                });
            });
    }
}

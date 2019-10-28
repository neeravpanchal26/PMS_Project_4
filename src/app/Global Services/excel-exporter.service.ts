import {Injectable} from '@angular/core';

// Custom imports
import * as FService from 'file-saver';
import {DatePipe} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ExcelExporterService {
    // Global Variable
    public EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    public EXCEL_EXTENSION = '.xlsx';

    // Default constructor
    constructor(private datePipe: DatePipe) {
    }

    // Excel exporter
    ExportToExcel(Header, ReportName, columnHeaders, Data, CompanyLogo, SubHeaders): void {
        // Alphabet array
        const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        // Excel object
        const Excel = require('exceljs');

        //  Create workbook
        const workbook = new Excel.Workbook();

        // Create worksheet
        const worksheet = workbook.addWorksheet(ReportName);

        // Business Logo load up
        const logo = workbook.addImage({base64: CompanyLogo[0].image, extension: 'png'});
        worksheet.addImage(logo, alphabet[columnHeaders.length - 1] + '1:' + alphabet[columnHeaders.length - 1] + '6');

        // Business Header
        worksheet.addRow([Header[0].BusinessName]);
        worksheet.addRow([Header[0].BusinessWebsite]);
        worksheet.addRow([Header[0].BusinessContact]);
        worksheet.addRow([Header[0].CityName]);
        worksheet.addRow([Header[0].BusinessVat]);
        worksheet.addRow([this.datePipe.transform(Date.now(), 'medium')]);

        for (let r = 0; r < 6; r++) {
            worksheet.mergeCells(alphabet[0] + (r + 1) + ':' + alphabet[columnHeaders.length - 2] + (r + 1));
        }

        // Title row
        const titleRow = worksheet.addRow([ReportName]);

        // Customize Title row
        titleRow.font = {name: 'Helvetica Neue', size: 20};
        worksheet.mergeCells(alphabet[0] + 7 + ':' + alphabet[columnHeaders.length - 1] + 7);

        // Sub Header
        const subHeaderRow = worksheet.addRow([SubHeaders]);
        worksheet.mergeCells(alphabet[0] + 8 + ':' + alphabet[columnHeaders.length - 1] + 8);
        subHeaderRow.font = {style: { alignment: { wrapText: true } }};

        // Column names
        const headerRow = worksheet.addRow(columnHeaders);
        headerRow.eachCell((cell, num) => {
            cell.font = {name: 'Helvetica Neue', size: 12, bold: true};
        });

        // Setting data column reference
        worksheet.columns = Object.keys(Data[0]).map((k) => ({key: k}));

        // Inserting data
        worksheet.addRows(Data);

        // Export to file
        workbook.xlsx.writeBuffer().then((data) => {
            FService.saveAs(new Blob([data], {type: this.EXCEL_TYPE}), ReportName + '_export_' + new Date().getTime() + this.EXCEL_EXTENSION);
        });
    }
}


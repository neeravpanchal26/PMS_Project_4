import {Component, OnInit} from '@angular/core';

// Custom imports
import {Chart} from 'chart.js';
import {DashboardTenantService} from './dashboard-tenant.service';
import {LoginService} from '../../../Global Services/login.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';

@Component({
    selector: 'app-dashboard-tenant',
    templateUrl: './dashboard-tenant.component.html',
    styleUrls: ['./dashboard-tenant.component.css']
})
export class DashboardTenantComponent implements OnInit {
    // Global variables
    public chart: Chart;
    public title: any;
    public day: any = 7;
    public complaints = [];
    public openComplaints;
    public closeComplaints;

    // Default constructor
    constructor(private LService: LoginService,
                private snackBar: SnackbarNotificationService,
                private service: DashboardTenantService) {
    }

    ngOnInit() {
        // Load up chart
        this.Chart();

        // Load up open complaints
        this.service.GetOpenComplaints(this.LService.GetUserID())
            .subscribe(data => this.openComplaints = data[0].totalComplaints,
                error => this.snackBar.handleError(error));

        // Load up close complaints
        this.service.GetCloseComplaints(this.LService.GetUserID())
            .subscribe(data => this.closeComplaints = data[0].totalComplaints,
                error => this.snackBar.handleError(error));

    }

    // Set Days
    setDays(e) {
        this.day = e;
        this.Chart();
    }

    Chart() {
        this.service.GetComplaints(this.LService.GetUserID(), this.day).subscribe(data => {
            this.complaints = data;

            // Date column
            const dates = data.map((value, index) => value.reportedDate);

            // Count column
            const complaintCount = data.map((value, index) => value.totalComplaints);

            const title = 'Complaints reported in past ' + this.day + ' days.';
            const xTitle = 'Dates';
            const yTitle = '# of Complaints';
            const chart = 'tenantCanvas';

            this.lineChart(dates, complaintCount, title, xTitle, yTitle, chart);
        });
    }


    // Dynamic chart function
    lineChart(xAxis, yAxis, title, xTitle, yTitle, chart) {
        // Chart Title assign
        this.title = title;

        // Chart creation
        this.chart = new Chart(chart, {
            type: 'line',
            data: {
                labels: xAxis,
                datasets: [{
                    borderColor: '#607d8b',
                    data: yAxis,
                    fill: false
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: yTitle
                        },
                        ticks: {
                            beginAtZero: true,
                            callback: function(value) {
                                if (value % 1 === 0) {
                                    return value;
                                }
                            }
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: xTitle
                        }
                    }]
                },
                legend: {
                    display: false
                },
                elements: {
                    line: {
                        tension: 0,
                    }
                },
                responsive: true
            }
        });
    }
}

import {Component, OnInit} from '@angular/core';

// Custom imports
import {Chart} from 'chart.js';
import {DashboardMaintenanceSupervisorService} from './dashboard-maintenance-supervisor.service';
import {SnackbarNotificationService} from '../../../Global Services/snackbar-notification.service';

@Component({
    selector: 'app-dashboard-maintenance-supervisor',
    templateUrl: './dashboard-maintenance-supervisor.component.html',
    styleUrls: ['./dashboard-maintenance-supervisor.component.css']
})
export class DashboardMaintenanceSupervisorComponent implements OnInit {
// Global variables
    public chart: Chart;
    public title: any;
    public day: any = 7;
    public complaints = [];
    public properties;
    public owners;
    public suppliers;

    // Default constructor
    constructor(private service: DashboardMaintenanceSupervisorService,
                private snackBar: SnackbarNotificationService) {
    }

    ngOnInit() {
        // Load up chart
        this.Chart();

        // Load property
        this.service.GetProperties()
            .subscribe(data => this.properties = data[0].totalProperty,
                error => this.snackBar.handleError(error));

        // Load owner
        this.service.GetOwners()
            .subscribe(data => this.owners = data[0].totalOwner,
                error => this.snackBar.handleError(error)
            );

        // Load supplier
        this.service.GetSuppliers()
            .subscribe(data => this.suppliers = data[0].totalSupplier,
                error => this.snackBar.handleError(error));
    }

    // Set Days
    setDays(e) {
        this.day = e;
        this.Chart();
    }

    Chart() {
        this.service.GetComplaints(this.day).subscribe(data => {
            this.complaints = data;

            // Date column
            const dates = data.map((value, index) => value.reportedDate);

            // Count column
            const complaintCount = data.map((value, index) => value.counter);

            const title = 'Complaints reported in past ' + this.day + ' days.';
            const xTitle = 'Dates';
            const yTitle = '# of Complaints';
            const chart = 'chart';

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

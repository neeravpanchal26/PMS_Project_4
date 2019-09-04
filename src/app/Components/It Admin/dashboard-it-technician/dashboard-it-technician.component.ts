import {Component, OnInit, ViewChild} from '@angular/core';

// Custom imports
import {Chart} from 'chart.js';
import {DashboardItTechnicianService} from './dashboard-it-technician.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
    selector: 'app-dashboard-it-technician',
    templateUrl: './dashboard-it-technician.component.html',
    styleUrls: ['./dashboard-it-technician.component.scss']
})
export class DashboardItTechnicianComponent implements OnInit {
    // Global variables
    public chart: Chart;
    public yAxis: any;
    public title: any;
    public day: any = 7;
    public user = [];

    // Data Table
    dataSource: MatTableDataSource<any>;
    displayedColumns: string[] = ['UserID', 'FirstName', 'Surname', 'count', 'lastAccess'];
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    // Default Constructor
    constructor(private service: DashboardItTechnicianService) {
    }

    // Form Load
    ngOnInit() {
        this.itAdminChart();
    }

    // Set Days
    setDays(e) {
        this.day = e;
        this.itAdminChart();
    }

    // IT Admin dashboard chart
    itAdminChart() {
        this.service.GetUsers(this.day).subscribe(data => {
            // Full Data for table display
            this.user = data;
            this.dataSource = new MatTableDataSource<any>(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;

            // First name column data for labels
            const firstName = data.map((value, index) => value.FirstName);

            // Count column for chart data
            const userCount = data.map((value, index) => value.count);

            // Parsing data to chart and generating chart
            this.lineChart
            (firstName, userCount, 'User movement in past ' + this.day + ' days.', 'Users', '# of logins', 'itTechnicianCanvas');
        });
    }

    // Dynamic chart function
    lineChart(xAxis, yAxis, title, xTitle, yTitle, chart) {
        // Display
        if (yAxis.length < 1) {
            this.yAxis = false;
        }

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
                            beginAtZero: true
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

    // Search filter
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}

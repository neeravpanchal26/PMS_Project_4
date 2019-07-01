import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    // Global Variables
    public date: Date;

    // Default Constructor
    constructor() {
    }

    // Form Load
    ngOnInit() {
        // Current year
        this.date = new Date();
    }
}

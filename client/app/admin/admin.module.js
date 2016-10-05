import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { MdInputModule, MdButtonModule } from '@angular/material';
import { UIRouterModule } from 'ui-router-ng2';

import { DashboardComponent } from './dashboard/dashboard.component';

//import '!raw!sass!./admin.scss'

@Component({
    selector: 'admin',
    template: `<div ui-view="body"></div>`
})
class AdminComponent {}

@NgModule({
    imports: [
        BrowserModule,
        UIRouterModule.forChild({
            states: [{
                name: 'admin',
                url: '/admin',
                component: AdminComponent,
                redirectTo: 'admin.dashboard'
            }, {
                name: 'admin.dashboard',
                url: '/dashboard',
                views: {
                    body: {component: DashboardComponent}
                }
            }]
        }),
    ],
    declarations: [
        AdminComponent,
        DashboardComponent,
    ]
})
export class AdminModule {}

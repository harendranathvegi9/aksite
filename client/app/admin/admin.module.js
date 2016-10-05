import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MdSlideToggleModule } from '@angular/material';
import { ProgressbarModule } from 'ng2-bootstrap';
import { UIRouterModule } from 'ui-router-ng2';
import { FileUploadModule } from 'ng2-file-upload';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PostEditorComponent } from './postEditor/postEditor.component';

//import '!raw!sass!./admin.scss'

@Component({
    selector: 'admin',
    template: `<div ui-view="body"></div>`
})
class AdminComponent {}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
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
            }, {
                name: 'admin.post',
                url: '/post/:postId',
                views: {
                    body: {component: PostEditorComponent}
                }
            }]
        }),
        MdSlideToggleModule,
        ProgressbarModule,
        FileUploadModule,
    ],
    declarations: [
        AdminComponent,
        DashboardComponent,
        PostEditorComponent,
    ]
})
export class AdminModule {}

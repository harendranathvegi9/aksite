import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MdSlideToggleModule, MdSidenavModule, MdIconModule, MdButtonModule, MdListModule } from '@angular/material';
import { ProgressbarModule } from 'ng2-bootstrap';
import { UIRouterModule } from 'ui-router-ng2';
import { FileUploadModule } from 'ng2-file-upload';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogManagerComponent } from './blog/blogManager.component';
import { PostEditorComponent } from './postEditor/postEditor.component';

//import '!raw!sass!./admin.scss'

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
                name: 'admin.blog',
                url: '/blog',
                views: {
                    body: {component: BlogManagerComponent}
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
        MdSidenavModule,
        MdIconModule,
        MdButtonModule,
        MdListModule,
        ProgressbarModule,
        FileUploadModule,
    ],
    declarations: [
        AdminComponent,
        DashboardComponent,
        BlogManagerComponent,
        PostEditorComponent,
    ]
})
export class AdminModule {}

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { PaginationModule, AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';

@NgModule({
    imports: [
        BrowserModule,
        PaginationModule,
        AlertModule,
    ],
    declarations: [
        BlogComponent,
        PostComponent,
    ]
})
export class BlogModule {}

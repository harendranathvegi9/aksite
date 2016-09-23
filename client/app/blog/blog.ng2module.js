import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        BlogComponent,
        PostComponent
    ]
})
export class BlogModule {}

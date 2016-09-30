import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from 'ui-router-ng2';
import { PaginationModule, AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        UIRouterModule.forChild({
            states: [{
                name: 'blog',
                url: '/blog',
                component: BlogComponent
            }, {
                name: 'post',
                url: '/blog/post/:postId',
                component: PostComponent
            }]
        }),
        PaginationModule,
        AlertModule,
    ],
    declarations: [
        BlogComponent,
        PostComponent,
    ],
    exports: [
        BlogComponent,
        PostComponent,
    ]
})
export class BlogModule {}

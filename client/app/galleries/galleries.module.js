import { NgModule } from '@angular/core';
import { UIRouterModule } from 'ui-router-ng2';
import { AlertModule } from 'ng2-bootstrap';

import { BrowserModule } from '@angular/platform-browser';
import { DirectivesModule } from '../../components/directives.module';

import { GalleryListComponent } from './galleryList.component';
import { GalleryComponent } from './gallery/gallery.component';

import { GalleryService } from '../../components/gallery/gallery.service';
import { PhotoService } from '../../components/photo/photo.service';

@NgModule({
    imports: [
        BrowserModule,
        UIRouterModule.forChild({
            states: [{
                name: 'galleries',
                url: '/galleries',
                component: GalleryListComponent
            }, {
                name: 'gallery',
                url: '/galleries/gallery/:galleryId',
                component: GalleryComponent
            }]
        }),
        AlertModule,
        BrowserModule,
        DirectivesModule
    ],
    providers: [
        GalleryService,
        PhotoService
    ],
    declarations: [
        GalleryListComponent,
        GalleryComponent
    ]
})
export class GalleriesModule {}

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { DirectivesModule } from '../../components/directives.module';

import { GalleryListComponent } from './galleryList.component';
import { GalleryComponent } from './gallery/gallery.component';

import { GalleryService } from '../../components/gallery/gallery.service';
import { PhotoService } from '../../components/photo/photo.service';

import { upgradeAdapter } from '../upgrade_adapter';

upgradeAdapter.upgradeNg1Provider('Gallery');
upgradeAdapter.upgradeNg1Provider('Photo');

@NgModule({
    imports: [
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

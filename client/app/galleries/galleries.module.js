import angular from 'angular';
import uirouter from 'angular-ui-router';
import {upgradeAdapter} from '../upgrade_adapter';

import directives from '../../components/common.directives.module';

import { GalleryListComponent } from './galleryList.component';
import { GalleryComponent } from './gallery/gallery.component';

import listRouting from './galleryList.routes';
import galleryRouting from './gallery/gallery.routes';

export default angular.module('aksiteApp.galleries', [uirouter, directives])
    .config(listRouting)
    .config(galleryRouting)
    .directive('galleryList', upgradeAdapter.downgradeNg2Component(GalleryListComponent))
    .directive('gallery', upgradeAdapter.downgradeNg2Component(GalleryComponent))
    .name;

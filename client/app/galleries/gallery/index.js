import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './gallery.routes';
import GalleryController from './gallery.controller';
import GalleryService from '../../../components/gallery/gallery.service';
import PhotoService from '../../../components/photo/photo.service';

//import '!raw!sass!./gallery.scss';

export default angular.module('aksiteApp.galleries.gallery', [uirouter, GalleryService, PhotoService])
    .config(routing)
    .controller('GalleryController', GalleryController)
    .name;

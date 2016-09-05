'use strict';
import angular from 'angular';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';
import {upgradeAdapter} from '../../app/upgrade_adapter';

@Injectable()
export class GalleryService {
    static parameters = [Http, AuthHttp];
    constructor(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
    }

    handleError(err) {
        throw err;
    }

    query() {
        return this.http.get('/api/gallery/')
            .toPromise()
            .then(extractData)
            .catch(this.handleError);
    }
    get(gallery: {id: 'string'}) {
        return this.http.get(`/api/gallery/${gallery.id}`)
            .toPromise()
            .then(extractData)
            .catch(this.handleError);
    }
    create(gallery) {
        return this.http.post('/api/gallery/', gallery)
            .toPromise()
            .then(extractData)
            .catch(this.handleError);
    }
    remove(gallery: {id: 'string'}) {
        return this.authHttp.delete(`/api/gallery/${gallery.id}`)
            .toPromise()
            .then(extractData)
            .catch(this.handleError);
    }
}

function extractData(res: Response) {
    if(!res.text()) return {};
    return res.json() || { };
}

upgradeAdapter.addProvider(GalleryService);

export default angular.module('factories.Gallery', [])
    .factory('Gallery', upgradeAdapter.downgradeNg2Provider(GalleryService))
    .name;

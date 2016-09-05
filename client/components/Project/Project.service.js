'use strict';
import angular from 'angular';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';
import {upgradeAdapter} from '../../app/upgrade_adapter';

@Injectable()
export class ProjectService {
    static parameters = [Http, AuthHttp];
    constructor(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
    }

    handleError(err) {
        throw err;
    }

    query() {
        return this.http.get('/api/projects/')
            .toPromise()
            .then(extractData)
            .catch(this.handleError);
    }
    get(project: {id: 'string'}) {
        return this.http.get(`/api/projects/${project.id}`)
            .toPromise()
            .then(extractData)
            .catch(this.handleError);
    }
    create(project) {
        return this.http.post('/api/projects/', project)
            .toPromise()
            .then(extractData)
            .catch(this.handleError);
    }
    remove(project) {
        return this.authHttp.delete(`/api/projects/${project.id}`)
            .toPromise()
            .then(extractData)
            .catch(this.handleError);
    }
}

function extractData(res: Response) {
    if(!res.text()) return {};
    return res.json() || { };
}

upgradeAdapter.addProvider(ProjectService);

export default angular.module('factories.Project', [])
    .factory('Project', upgradeAdapter.downgradeNg2Provider(ProjectService))
    .name;

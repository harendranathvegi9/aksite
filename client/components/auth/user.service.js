'use strict';
import angular from 'angular';
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
// import {Observable} from 'rxjs/Rx';
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {upgradeAdapter} from '../../app/upgrade_adapter';

type UserType = {
    // TODO: use Mongoose model
    name: string;
    email: string;
}

@Injectable()
export class UserService {
    static parameters = [AuthHttp];
    constructor(authHttp) {
        this.authHttp = authHttp;
    }

    handleError(err) {
        throw err;
    }

    query() {
        return this.authHttp.get('/api/users/')
            .toPromise()
            .then(extractData)
            .catch(this.handleError);
    }
    get(user = {id: 'me'}) {
        return this.authHttp.get(`/api/users/${user.id}`)
            .toPromise()
            .then(extractData)
            .catch(this.handleError);
    }
    create(user: UserType) {
        return this.authHttp.post('/api/users/', user)
            .toPromise()
            .then(extractData)
            .catch(this.handleError);
    }
    changePassword(user, oldPassword, newPassword) {
        return this.authHttp.put(`/api/users/${user.id}/password`, {oldPassword, newPassword})
            .toPromise()
            .then(extractData)
            .catch(this.handleError);
    }
    remove(user) {
        return this.authHttp.delete(`/api/users/${user.id}`)
            .toPromise()
            .then(extractData)
            .catch(this.handleError);
    }
}

function extractData(res: Response) {
    if(!res.text()) return {};
    return res.json() || { };
}

upgradeAdapter.addProvider(UserService);

export default angular.module('factories.User', [])
    .factory('User', upgradeAdapter.downgradeNg2Provider(UserService))
    .name;

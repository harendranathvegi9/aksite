'use strict';
import angular from 'angular';
import {Component} from '@angular/core';
import {upgradeAdapter} from '../upgrade_adapter';
import uirouter from 'angular-ui-router';
import routing from './user.routes';
import {UserService} from '../../components/auth/user.service';

@Component({
    selector: 'user',
    template: require('./user.html'),
    styles: [require('!!raw!sass!./user.scss')]
})
export class UserComponent {
    user = {};

    static parameters = ['$stateParams', UserService];
    constructor($stateParams, userService: UserService) {
        this.$stateParams = $stateParams;
        this.UserService = userService;

        this.id = $stateParams.id;

        this.UserService.get({id: this.id}).then(_user => {
            this.user = _user;
        });
    }
}

export default angular.module('aksiteApp.user', [uirouter])
    .config(routing)
    .directive('user', upgradeAdapter.downgradeNg2Component(UserComponent))
    .name;

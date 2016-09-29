import angular from 'angular';
import uirouter from 'angular-ui-router';
import { upgradeAdapter } from '../upgrade_adapter';

import { UserComponent } from './user.component';

import routing from './user.routes';

export default angular.module('aksiteApp.user', [uirouter])
    .config(routing)
    .directive('user', upgradeAdapter.downgradeNg2Component(UserComponent))
    .name;

import angular from 'angular';
import uirouter from 'angular-ui-router';
import { upgradeAdapter } from '../upgrade_adapter';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import routing from './account.routes';

export default angular.module('aksiteApp.account', [uirouter])
    .config(routing)
    .directive('login', upgradeAdapter.downgradeNg2Component(LoginComponent))
    .directive('signup', upgradeAdapter.downgradeNg2Component(SignupComponent))
    .name;

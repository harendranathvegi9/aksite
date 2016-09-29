import angular from 'angular';
import uirouter from 'angular-ui-router';
import { upgradeAdapter } from '../upgrade_adapter';

import { LoginComponent } from './login/login.component';
import { SignupController } from './signup/signup.controller';

import routing from './account.routes';

export default angular.module('aksiteApp.account', [uirouter])
    .config(routing)
    .directive('login', upgradeAdapter.downgradeNg2Component(LoginComponent))
    .controller('SignupController', SignupController)
    .name;

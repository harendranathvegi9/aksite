import angular from 'angular';
import uirouter from 'angular-ui-router';
// import {upgradeAdapter} from '../upgrade_adapter';

import { LoginController } from './login/login.controller';
import { SignupController } from './signup/signup.controller';

import routing from './account.routes';

export default angular.module('aksiteApp.account', [uirouter])
    .config(routing)
    .controller('LoginController', LoginController)
    .controller('SignupController', SignupController)
    .name;

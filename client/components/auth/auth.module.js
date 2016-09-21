import angular from 'angular';
import {upgradeAdapter} from '../../app/upgrade_adapter';

import { AuthService } from './auth.service';
import { UserService } from './user.service';

export default angular.module('aksiteApp.auth', [])
    .service('Auth', upgradeAdapter.downgradeNg2Provider(AuthService))
    .service('User', upgradeAdapter.downgradeNg2Provider(UserService))
    .name;

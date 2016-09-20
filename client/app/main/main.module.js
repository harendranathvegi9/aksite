import angular from 'angular';
import uirouter from 'angular-ui-router';
import {upgradeAdapter} from '../upgrade_adapter';

import { MainComponent } from './main.component';

import routing from './main.routes';

export default angular.module('aksiteApp.main', [uirouter])
    .config(routing)
    .directive('main', upgradeAdapter.downgradeNg2Component(MainComponent))
    .name;

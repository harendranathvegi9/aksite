import angular from 'angular';
import {upgradeAdapter} from '../app/upgrade_adapter';

import { FooterComponent } from './footer/footer.component';

export default angular.module('directives', [])
    .directive('footer', upgradeAdapter.downgradeNg2Component(FooterComponent))
    .name;

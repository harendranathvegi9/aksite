import angular from 'angular';
// import { upgradeAdapter } from './upgrade_adapter';
// import navbar, { NavbarComponent } from '../components/navbar/navbar.component';
// import { AppComponent } from './app.component';
// import { FooterComponent } from './layouts/footer/footer.component';
import uirouter from 'angular-ui-router';

import main from './main/main.module';
import directives from '../components/common.directives.module';

angular.module('aftestApp', [
    main,
    directives,
    uirouter
])
    // .directive('app', upgradeAdapter.downgradeNg2Component(AppComponent))
    .run($state => {
        'ngInject';
        $state.go('main');
    });

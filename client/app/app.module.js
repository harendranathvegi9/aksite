import angular from 'angular';
// import { upgradeAdapter } from './upgrade_adapter';
// import navbar, { NavbarComponent } from '../components/navbar/navbar.component';
// import { AppComponent } from './app.component';
// import { FooterComponent } from './layouts/footer/footer.component';
import uirouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import main from './main/main.module';
import directives from '../components/common.directives.module';
import authModule from '../components/auth/auth.module';
import accountModule from './account/account.module';
import projectsModule from './projects/projects.module';
import galleriesModule from './galleries/galleries.module';
import blogModule from './blog/blog.module';
import { SocketService } from '../components/socket/socket.service';

    main,
export default angular.module('aksiteApp', [
    directives,
    authModule,
    accountModule,
    projectsModule,
    galleriesModule,
    blogModule,
    uirouter,
    ngMaterial,
])
    .service('socket', SocketService);
    // .directive('app', upgradeAdapter.downgradeNg2Component(AppComponent))

'use strict';
// import angular from 'angular';
// import oclazyload from 'oclazyload';
// import {upgradeAdapter} from './upgrade_adapter';
// import {Component, forwardRef, NgModule, ApplicationRef, Input} from '@angular/core';
// import {BrowserModule} from '@angular/platform-browser';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import {HTTP_PROVIDERS} from '@angular/http';
// import {UpgradeAdapter} from '@angular/upgrade';
// import {AUTH_PROVIDERS} from 'angular2-jwt';
// import Raven from 'raven-js';
// import RavenAngular from 'raven-js/plugins/angular.js';

// import ngAnimate from 'angular-animate';
// import ngCookies from 'angular-cookies';
// import ngSanitize from 'angular-sanitize';
// import 'angular-socket-io';
// import uiRouter from 'angular-ui-router';
// import uiBootstrap from 'angular-ui-bootstrap';
// import ngFileUpload from 'ng-file-upload';
// import ngMaterial from 'angular-material';
// import ngMessages from 'angular-messages';

// import _Auth from '../components/auth/auth.service';
// import {CollapseModule} from 'ng2-bootstrap/components/collapse';
// import {NavbarComponent} from '../components/navbar/navbar.component';
// import {FooterComponent} from '../components/footer/footer.component';
// import Preloader from '../components/preloader/preloader.component';
//
// import routing from './app.config';
// import Constants from './app.constants';
//
// import main, {MainComponent} from './main/main.component';
// import account from './account';
// import resume from './resume';
// import blog from './blog/blog.component';
// import projectList from './projects/projectList.component';
// import galleryList from './galleries/galleryList.component';
// import adminRoutes from './admin/admin.routes';
// import user from './user/user.component';
// import settings from './settings';

import '../../node_modules/angular-material/angular-material.scss';
import './app.scss';

// adapter.addProvider(Constants);

// class RavenExceptionHandler {
//     call(err) {
//         Raven.captureException(err.originalException);
//     }
// }

// angular.module('aksiteApp', [
//     ngAnimate,
//     ngCookies,
//     ngSanitize,
//     'btford.socket-io',
//     uiRouter,
//     oclazyload,
//     uiBootstrap,
//     ngFileUpload,
//     ngMaterial,
//     ngMessages,
//     main,
//     _Auth,
//     navbar,
//     footer,
//     Preloader,
//     account,
//     resume,
//     blog,
//     projectList,
//     galleryList,
//     adminRoutes,
//     user,
//     settings
// ])
//     .directive('app', adapter.downgradeNg2Component(AppComponent))
//     .config(routing)
//     .factory('authInterceptor', function($rootScope, $q, $cookies, $injector) {
//         'ngInject';
//         var state;
//         return {
//             // Add authorization token to headers
//             request(config) {
//                 config.headers = config.headers || {};
//                 if($cookies.get('token')) {
//                     config.headers.Authorization = `Bearer ${$cookies.get('token')}`;
//                 }
//                 return config;
//             },
//
//             // Intercept 401s and redirect you to login
//             responseError(response) {
//                 if(response.status === 401) {
//                     (state || (state = $injector.get('$state'))).go('login');
//                     // remove any stale tokens
//                     $cookies.remove('token');
//                     return $q.reject(response);
//                 } else {
//                     return $q.reject(response);
//                 }
//             }
//         };
//     })
//     .factory('constants', adapter.downgradeNg2Provider(Constants))
//     .run(function($rootScope, $location, Auth, constants) {
//         'ngInject';
//
//         Raven
//             .config(constants.default.sentry.publicDsn)
//             .addPlugin(RavenAngular, angular)
//             .install();
//
//         // Redirect to login if route requires auth and you're not logged in
//         $rootScope.$on('$stateChangeStart', function(event, next) {
//             $rootScope.title = 'Andrew Koroluk';
//             return Auth.isLoggedInAsync().then(loggedIn => {
//                 if(next.authenticate && !loggedIn) {
//                     $location.path('/login');
//                 }
//             });
//         });
//
//         $rootScope.titleRoot = 'AK';
//         $rootScope.title = 'Andrew Koroluk';
//     });

// export const adapter = new UpgradeAdapter(forwardRef(() => AppModule));

// const app = angular.module('aksiteApp', []);

// `
//         <navbar></navbar>
//         <div ui-view=""></div>
//         <footer></footer>`

// @Component({
//     selector: 'app',
//     template: `<h1>Hello</h1>
//         <footer></footer>`
// })
// export class AppComponent {
//     @Input() salutation;
//     @Input() name;
// }
//
// @NgModule({
//     declarations: [AppComponent, NavbarComponent, FooterComponent],
//     imports: [BrowserModule, CollapseModule],
//     bootstrap: [AppComponent]
// })
// export class AppModule {}
//
// const platform = platformBrowserDynamic();
//
// platform.bootstrapModule(AppModule);

import 'zone.js/dist/zone';
import 'reflect-metadata';

import { upgradeAdapter } from './upgrade_adapter';
import './app.module';

upgradeAdapter.bootstrap(document.body, ['aksiteApp'], {strictDi: true});

// app.directive('app', adapter.downgradeNg2Component(AppComponent));

// angular
//     .element(document.body)
//     .ready(() => {
//         adapter.bootstrap(document.body, [
//             'aksiteApp',
//             // {provide: ExceptionHandler, useClass: RavenExceptionHandler}
//         ]);
//     });

upgradeAdapter.upgradeNg1Provider('$rootScope');
upgradeAdapter.upgradeNg1Provider('$http');
upgradeAdapter.upgradeNg1Provider('$location');
upgradeAdapter.upgradeNg1Provider('$state');
upgradeAdapter.upgradeNg1Provider('$cookies');
upgradeAdapter.upgradeNg1Provider('$stateParams');
upgradeAdapter.upgradeNg1Provider('$sce');

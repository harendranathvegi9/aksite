'use strict';

export default function routes($stateProvider) {
    'ngInject';
    $stateProvider.state('login', {
        url: '/login',
        component: 'login',
        onEnter: function($rootScope) {
            $rootScope.title = `${$rootScope.titleRoot} | Login`;
        }
    }).state('signup', {
        url: '/signup',
        component: 'signup',
        onEnter: function($rootScope) {
            $rootScope.title = $rootScope.titleRoot + ' | Signup';
        }
    });
}

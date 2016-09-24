'use strict';

export default function routes($stateProvider, $urlRouterProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
            component: 'main'
        });
}

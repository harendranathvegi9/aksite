'use strict';

export default function routes($stateProvider) {
    'ngInject';
    $stateProvider
        .state('user', {
            url: '/user/:id',
            component: 'user'
        });
}

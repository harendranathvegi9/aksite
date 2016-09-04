'use strict';

export default function routes($stateProvider) {
    'ngInject';
    $stateProvider
        .state('galleries', {
            url: '/galleries',
            template: '<gallery-list></gallery-list>',
            onEnter($rootScope) {
                $rootScope.title = `${$rootScope.titleRoot} | Galleries`;
            }
        });
}

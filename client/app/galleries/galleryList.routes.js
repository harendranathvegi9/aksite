'use strict';

export default function routes($stateProvider) {
    'ngInject';
    $stateProvider
        .state('galleries', {
            url: '/galleries',
            component: 'galleryList',
            onEnter($rootScope) {
                $rootScope.title = `${$rootScope.titleRoot} | Galleries`;
            }
        });
}

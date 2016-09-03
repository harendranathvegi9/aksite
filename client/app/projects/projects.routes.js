'use strict';

export default function routes($stateProvider) {
    'ngInject';
    $stateProvider
        .state('projects', {
            url: '/projects',
            template: '<project-list></project-list>',
            onEnter: function($rootScope) {
                $rootScope.title = `${$rootScope.titleRoot} | Projects`;
            }
        });
}

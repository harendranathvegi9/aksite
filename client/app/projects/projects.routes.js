'use strict';

export default function routes($stateProvider) {
    'ngInject';
    $stateProvider
        .state('projects', {
            url: '/projects',
            component: 'projectList',
            onEnter: function($rootScope) {
                $rootScope.title = `${$rootScope.titleRoot} | Projects`;
            }
        });
}

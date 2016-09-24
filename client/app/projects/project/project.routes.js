'use strict';

export default function routes($stateProvider) {
    'ngInject';
    $stateProvider
        .state('project', {
            url: '/projects/:projectId',
            component: 'project',
            onEnter($rootScope) {
                $rootScope.title = `${$rootScope.titleRoot} | Projects`;
            }
        });
}

'use strict';

export default function routes($stateProvider) {
    'ngInject';
    $stateProvider
        .state('settings', {
            abstract: true,
            url: '/settings',
            template: require('./settings.html'),
            controller: 'SettingsController',
            controllerAs: 'settings',
            onEnter($rootScope) {
                $rootScope.title = `${$rootScope.titleRoot} | Settings`;
            }
        });
}

'use strict';

export default function routes($stateProvider) {
    'ngInject';
    $stateProvider
        .state('blog', {
            url: '/blog?page&pagesize',
            component: 'blog',
            onEnter($rootScope) {
                $rootScope.title = `${$rootScope.titleRoot} | Blog`;
            }
        });
}

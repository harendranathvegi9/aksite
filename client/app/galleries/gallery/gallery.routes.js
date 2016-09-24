'use strict';

export default function routes($stateProvider) {
    'ngInject';
    $stateProvider
        .state('gallery', {
            url: '/galleries/:galleryId',
            component: 'gallery',
            onEnter: function($rootScope) {
                $rootScope.title = $rootScope.titleRoot + ' | Galleries';
            }
        });
}

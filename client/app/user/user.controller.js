'use strict';

export default class UserController {
    user;

    /*@ngInject*/
    constructor($stateParams, User) {
        this.id = $stateParams.id;

        User.get({id: this.id}).then(_user => {
            this.user = _user;
        });
    }
}

'use strict';
import { Component } from '@angular/core';

import { AuthService } from '../../../components/auth/auth.service';

@Component({
    selector: 'signup',
    template: require('./signup.html'),
    styles: [require('!!raw!sass!./signup.scss')]
})
export class SignupComponent {
    user = {};
    errors = {};
    submitted = false;

    static parameters = [AuthService, '$location', '$state'];
    constructor(authService: AuthService, $location, $state) {
        this.authService = authService;
        this.$location = $location;
        this.$state = $state;
    }

    register() {
        this.submitted = true;

        this.authService.createUser({
            name: this.user.name,
            email: this.user.email,
            password: this.user.password
        }).then(() => {
            this.$location.path('/');
        }).catch(err => {
            this.errors = err;
        });
    }

    loginOauth(provider) {
        window.location.href = `/auth/${provider}`;
    }

    sref(state) {
        this.$state.go(state);
    }
}

'use strict';
import { Component } from '@angular/core';

import { AuthService } from '../../../components/auth/auth.service';

@Component({
    selector: 'login',
    template: require('./login.html'),
    style: [require('!!raw!sass!./login.scss')]
})
export class LoginComponent {
    user = {};
    errors = {};
    submitted = false;

    static parameters = [AuthService, '$location', '$state'];
    constructor(authService: AuthService, $location, $state) {
        this.authService = authService;
        this.$location = $location;
        this.$state = $state;
    }

    login() {
        this.submitted = true;

        this.authService.login({
            email: this.user.email,
            password: this.user.password
        })
            .then(() => {
                // Logged in, redirect to home
                this.$location.path('/');
            })
            .catch(err => {
                if(err) this.errors.other = err.message;
            });
    }

    loginOauth(provider) {
        window.location.href = `/auth/${provider}`;
    }

    sref(state) {
        this.$state.go(state);
    }
}
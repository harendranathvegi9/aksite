'use strict';
import { Component } from '@angular/core';

import { StateService } from 'ui-router-ng2';
import { AuthService } from '../../../components/auth/auth.service';

@Component({
    selector: 'login',
    template: require('./login.html'),
    style: [require('./login.scss')]
})
export class LoginComponent {
    user = {};
    errors = {};
    submitted = false;

    static parameters = [StateService, AuthService];
    constructor(stateService: StateService, authService: AuthService) {
        this.StateService = stateService;
        this.authService = authService;
    }

    login() {
        this.submitted = true;

        this.authService.login({
            email: this.user.email,
            password: this.user.password
        })
            .then(() => {
                // Logged in, redirect to home
                this.StateService.go('main');
            })
            .catch(err => {
                if(err) this.errors.other = err.message;
            });
    }

    loginOauth(provider) {
        window.location.href = `/auth/${provider}`;
    }
}

'use strict';
import { Component } from '@angular/core';
import { StateService } from 'ui-router-ng2';
import { AuthService } from '../auth/auth.service';

//import './navbar.scss';

@Component({
    selector: 'navbar',
    template: require('./navbar.html')
})
export class NavbarComponent {
    isCollapsed = true;
    menu = [{
        title: 'Home',
        sref: 'main',
    }, {
        title: 'Résumé',
        sref: 'resume',
    }, {
        title: 'Projects',
        sref: 'projects',
    }, {
        title: 'Photography',
        sref: 'galleries',
    }, {
        title: 'Blog',
        sref: 'blog',
    }];

    static parameters = [AuthService, StateService];
    constructor(authService: AuthService, stateService: StateService) {
        this.AuthService = authService;
        this.StateService = stateService;

        this.isLoggedIn = (...args) => authService.isLoggedInSync(...args);
        this.isAdmin = (...args) => authService.isAdmin(...args);
        this.getCurrentUser = (...args) => authService.getCurrentUser(...args);
        this.authLogout = () => authService.logout();
    }

    logout() {
        let promise = this.authLogout();
        this.StateService.go('login');
        return promise;
    }
}

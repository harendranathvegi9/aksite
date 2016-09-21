'use strict';
import {Component} from '@angular/core';
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
        link: '/'
    }, {
        title: 'Résumé',
        //link: '/resume'
        link: 'https://www.linkedin.com/in/koroluka'
    }, {
        title: 'Projects',
        link: '/projects'
    }, {
        title: 'Photography',
        link: '/galleries'
    }, {
        title: 'Blog',
        link: '/blog'
    }];

    static parameters = ['$location', '$state', AuthService];
    constructor($location, $state, authService: AuthService) {
        this.$location = $location;
        this.$state = $state;
        this.isLoggedIn = (...args) => authService.isLoggedInSync(...args);
        this.isAdmin = (...args) => authService.isAdmin(...args);
        this.getCurrentUser = (...args) => authService.getCurrentUser(...args);
        this.authLogout = () => authService.logout();
    }

    logout() {
        this.authLogout();
        this.$location.path('/login');
    }

    isActive(route) {
        return route === this.$location.path();
    }

    sref(id) {
        this.$state.go(id);
    }
}

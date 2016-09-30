'use strict';
import { Component } from '@angular/core';
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
        link: '/'
    }, {
        title: 'Résumé',
        sref: 'https://www.linkedin.com/in/koroluka',
        link: 'https://www.linkedin.com/in/koroluka'
    }, {
        title: 'Projects',
        sref: 'projects',
        link: '/projects'
    }, {
        title: 'Photography',
        sref: 'galleries',
        link: '/galleries'
    }, {
        title: 'Blog',
        sref: 'blog',
        link: '/blog'
    }];

    static parameters = [/*'$location', '$state', */AuthService];
    constructor(authService: AuthService) {
        this.$state = {go() {}};
        this.isLoggedIn = (...args) => authService.isLoggedInSync(...args);
        this.isAdmin = (...args) => authService.isAdmin(...args);
        this.getCurrentUser = (...args) => authService.getCurrentUser(...args);
        this.authLogout = () => authService.logout();
    }

    logout() {
        this.authLogout();
        this.$state.go('login');
    }

    isActive(route) {
        return route === window.location.href.split('#')[1];
    }

    sref(id: string, opts = {}) {
        if(id.includes('http')) {
            window.location = id;
        }
        this.$state.go(id, opts);
    }
}

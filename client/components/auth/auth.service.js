'use strict';
import {wrapperLodash as _, mixin} from 'lodash-es';
import {
    isFunction
} from 'lodash-es';
mixin(_, {
    isFunction
});
import {noop} from 'lodash-es';
import angular from 'angular';
import ngCookies from 'angular-cookies';

import _User from './user.service';
import Promise from 'bluebird';

/**
 * Return a callback or noop function
 *
 * @param  {Function|*} cb - a 'potential' function
 * @return {Function}
 */
function safeCb(cb) {
    return _.isFunction(cb) ? cb : noop;
}

class Auth {
    currentUser = {};

    /*@ngInject*/
    constructor($http, User, $cookies) {
        this.$http = $http;
        this.User = User;
        this.$cookies = $cookies;

        if($cookies.get('token')) {
            User.get().then(user => {
                this.currentUser = user;
            }).catch(err => {
                console.log(err);

                this.$cookies.remove('token');
            });
        }
    }

    /**
     * Authenticate user and save token
     *
     * @param  {Object}   user     - login info
     * @param  {Function} callback - optional, function(error, user)
     * @return {Promise}
     */
    login({email, password}, callback) {
        return this.$http.post('/auth/local', {
            email,
            password
        }).then(res => {
            this.$cookies.put('token', res.data.token);
            localStorage.setItem('id_token', res.data.token);
            return this.User.get();
        }).then(user => {
            this.currentUser = user;
            localStorage.setItem('user', JSON.stringify(user));
            console.log(this.currentUser);
            safeCb(callback)(null, user);
            return user;
        }).catch(err => {
            this.logout();
            safeCb(callback)(err.data);
            return Promise.reject(err.data);
        });
    }

    /**
     * Delete access token and user info
     */
    logout() {
        this.$cookies.remove('token');
        localStorage.removeItem('user');
        localStorage.removeItem('id_token');
        this.currentUser = {};
        return Promise.resolve();
    }

    /**
     * Create a new user
     *
     * @param  {Object}   user     - user info
     * @param  {Function} callback - optional, function(error, user)
     * @return {Promise}
     */
    createUser(user, callback) {
        return this.User.create(user)
            .then(data => {
                this.$cookies.put('token', data.token);
                return this.User.get();
            })
            .then(_user => {
                this.currentUser = _user;
                return safeCb(callback)(null, _user);
            })
            .catch(err => {
                this.logout();
                return safeCb(callback)(err);
            });
    }

    /**
     * Change password
     *
     * @param  {String}   oldPassword
     * @param  {String}   newPassword
     * @param  {Function} callback    - optional, function(error, user)
     * @return {Promise}
     */
    changePassword(oldPassword, newPassword, callback) {
        return this.User.changePassword({id: this.currentUser._id}, oldPassword, newPassword)
            .then(() => safeCb(callback)(null))
            .catch(err => safeCb(callback)(err));
    }

    /**
     * Gets all available info on a user
     *   (synchronous|asynchronous)
     *
     * @param  {Function|*} [callback] - optional, function(user)
     * @return {Object|Promise}
     */
    getCurrentUser(callback) {
        if(!callback) {
            return this.currentUser;
        }

        safeCb(callback)(this.currentUser);
        return Promise.resolve(this.currentUser);
    }

    /**
     * Gets all available info on a user
     *
     * @return {Object|Promise}
     */
    getCurrentUserSync() {
        return this.currentUser;
    }

    /**
     * Check if a user is logged in
     *   (synchronous|asynchronous)
     *
     * @param  {Function|*} [callback] - optional, function(is)
     * @return {Boolean|Promise}
     */
    isLoggedIn(callback) {
        if(!callback) {
            return this.currentUser.hasOwnProperty('role');
        }

        return this.getCurrentUser(null)
            .then(function(user) {
                var is = user.hasOwnProperty('role');
                safeCb(callback)(is);
                return is;
            });
    }

    /**
     * Waits for this.currentUser to resolve before checking if user is logged in
     */
    isLoggedInAsync() {
        return Promise.resolve(this.currentUser.hasOwnProperty('role'));
    }

    /**
     * Waits for this.currentUser to resolve before checking if user is logged in
     */
    isLoggedInSync() {
        return this.currentUser.hasOwnProperty('role');
    }

    /**
     * Check if a user is an admin
     *   (synchronous|asynchronous)
     *
     * @param  {Function|*} callback - optional, function(is)
     * @return {Boolean|Promise}
     */
    isAdmin(callback) {
        if(arguments.length === 0) {
            return this.currentUser.role === 'admin';
        }

        return this.getCurrentUser().then(user => {
            var is = user.role === 'admin';
            safeCb(callback)(is);
            return is;
        });
    }

    /**
     * Get auth token
     *
     * @return {String} - a token string used for authenticating
     */
    getToken() {
        return this.$cookies.get('token');
    }
}

export default angular.module('services.Auth', [_User, ngCookies])
    .service('Auth', Auth)
    .name;

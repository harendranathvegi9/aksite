import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { StateService } from 'ui-router-ng2';
import Raven from 'raven-js';

import moment from 'moment';
import { Converter } from 'showdown';
const converter = new Converter();

@Component({
    selector: 'post',
    template: require('./post.html'),
    styles: [require('!!raw!sass!./post.scss'), require('!!raw!sass!../blog.scss')]
})
export class PostComponent {
    error;
    post = {author: {}};

    static parameters = [StateService, Http];
    constructor(stateService: StateService, http: Http, $rootScope, $stateParams, $http, $sce) {
        this.StateService = stateService;
        this.Http = http;

        this.postId = this.StateService.params.postId;

        this.$sce = $sce;
    }

    ngOnInit() {
        return this.Http.get(`api/posts/${this.postId}`)
            .toPromise()
            .then(res => {
                if(!res.text()) return {};
                return res.json() || { };
            })
            .then(post => {
                this.post = post;

                // this.$rootScope.title += ` | ${post.title}`;

                // this.post.content = this.$sce.trustAsHtml(converter.makeHtml(this.post.content));
                this.post.content = converter.makeHtml(this.post.content);
                this.post.date = moment(this.post.date).format('LL');
            })
            .catch(err => {
                Raven.captureException(new Error(JSON.stringify(err)));
                console.log(err);
                this.error = err;
            });
    }
}

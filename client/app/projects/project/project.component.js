import angular from 'angular';
import uirouter from 'angular-ui-router';
import {Component} from '@angular/core';
import {upgradeAdapter} from '../../../app/upgrade_adapter';
import {Converter} from 'showdown';
const converter = new Converter();
import {ProjectService} from '../../../components/Project/Project.service';

import routes from './project.routes';

@Component({
    selector: 'project',
    template: require('./project.html'),
    styles: [require('!!raw!sass!./project.scss')]
})
export class ProjectComponent {
    error;
    project = {};

    static parameters = [ProjectService, '$rootScope', '$http', '$stateParams'];
    constructor(projectService: ProjectService, $rootScope, $http, $stateParams) {
        this.projectService = projectService;
        this.$rootScope = $rootScope;
        this.$http = $http;
        this.$stateParams = $stateParams;

        this.projectId = $stateParams.projectId;
    }

    ngOnInit() {
        return this.projectService.get({id: this.$stateParams.projectId})
            .then(project => {
                this.project = project;

                this.$rootScope.title += ` | ${project.name}`;

                this.content = converter.makeHtml(project.content);
            })
            .catch(res => {
                this.error = res;
            });
    }
}

export default angular.module('aksiteApp.projects.project', [uirouter])
    .config(routes)
    .directive('project', upgradeAdapter.downgradeNg2Component(ProjectComponent))
    .name;

import {Component} from '@angular/core';
import {Converter} from 'showdown';
const converter = new Converter();
import {ProjectService} from '../../../components/Project/Project.service';

@Component({
    selector: 'project',
    template: require('./project.html'),
    styles: [require('./project.scss')]
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

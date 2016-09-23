import {Component, ViewEncapsulation} from '@angular/core';
import {autobind} from 'core-decorators';

// import { PreloaderComponent } from '../../components/preloader/preloader.component'

import {ProjectService} from '../../components/Project/Project.service';

import React from 'react';
import ReactDOM from 'react-dom';
import { CSSGrid, makeResponsive, layout } from 'react-stonecutter';

const Grid = makeResponsive(CSSGrid, {
    maxWidth: 1920
});

@Component({
    selector: 'project-list',
    template: require('./projectList.html'),
    styles: [require('!!raw!sass!./projectList.scss')],
    encapsulation: ViewEncapsulation.None,
    // directives: [PreloaderComponent]
})
export class ProjectListComponent {
    projects = [];
    loadingProjects = true;

    static parameters = [ProjectService, '$http', '$state'];
    constructor(Project: ProjectService, $http, $state) {
        this.Project = Project;
        this.$http = $http;
        this.$state = $state;
    }

    ngOnInit() {
        return this.Project.query()
            .then(projects => {
                this.loadingProjects = false;
                Reflect.deleteProperty(projects, '$promise');
                Reflect.deleteProperty(projects, '$resolved');
                this.projects = projects;

                let projectArray = this.projects.map((project, i) => {
                    return <li style={{padding: '10px'}} key={i} itemHeight={340}>
                        <a className="card md-whiteframe-z1" style={{display: 'block'}} id={project._id} onClick={this.goToProject}>
                            <div className="item">
                                <img src={`/api/upload/${project.thumbnailId}.jpg`} alt="" />
                            </div>
                            <div className="card-content">
                                <h2 className="md-title">{project.name}</h2>
                                <p>{project.info}</p>
                            </div>
                        </a>
                    </li>;
                });

                ReactDOM.render(
                    <Grid
                        className="grid"
                        component="ul"
                        columnWidth={300}
                        itemHeight={340}
                        gutterWidth={15}
                        gutterHeight={15}
                        layout={layout.pinterest}
                        duration={800}
                        easing="ease-out">
                        {projectArray}
                    </Grid>,
                    document.getElementById('stonecutter'));
            })
            .catch(res => {
                this.errors.push(res);
            });
    }

    @autobind
    goToProject(event) {
        this.$state.go('project', {projectId: event.currentTarget.id});
    }
}

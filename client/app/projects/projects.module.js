import { NgModule } from '@angular/core';
import { UIRouterModule } from 'ui-router-ng2';

import { BrowserModule } from '@angular/platform-browser';
import { DirectivesModule } from '../../components/directives.module';

import { ProjectListComponent } from './projectList.component';
import { ProjectComponent } from './project/project.component';

import { ProjectService } from '../../components/Project/Project.service';

import { upgradeAdapter } from '../upgrade_adapter';

upgradeAdapter.upgradeNg1Provider('Project');

@NgModule({
    imports: [
        BrowserModule,
        DirectivesModule,
        UIRouterModule.forChild({
            states: [{
                name: 'projects',
                url: '/projects',
                component: ProjectListComponent
            }, {
                name: 'project',
                url: '/projects/project/:projectId',
                component: ProjectComponent
            }]
        }),
    ],
    providers: [ProjectService],
    declarations: [
        ProjectListComponent,
        ProjectComponent
    ]
})
export class ProjectsModule {}

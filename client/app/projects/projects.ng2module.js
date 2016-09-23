import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { DirectivesModule } from '../../components/common.directives.ng2module';

import { ProjectListComponent } from './projectList.component';
import { ProjectComponent } from './project/project.component';

import { ProjectService } from '../../components/Project/Project.service';

import { upgradeAdapter } from '../upgrade_adapter';

upgradeAdapter.upgradeNg1Provider('Project');

@NgModule({
    imports: [
        BrowserModule,
        DirectivesModule
    ],
    providers: [ProjectService],
    declarations: [
        ProjectListComponent,
        ProjectComponent
    ]
})
export class ProjectsModule {}

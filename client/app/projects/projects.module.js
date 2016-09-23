import angular from 'angular';
import uirouter from 'angular-ui-router';
import {upgradeAdapter} from '../upgrade_adapter';

import directives from '../../components/common.directives.module';

import { ProjectListComponent } from './projectList.component';
import { ProjectComponent } from './project/project.component';

import listRouting from './projects.routes';
import projectRouting from './project/project.routes';

export default angular.module('aksiteApp.projects', [uirouter, directives])
    .config(listRouting)
    .config(projectRouting)
    .directive('projectList', upgradeAdapter.downgradeNg2Component(ProjectListComponent))
    .directive('project', upgradeAdapter.downgradeNg2Component(ProjectComponent))
    .name;

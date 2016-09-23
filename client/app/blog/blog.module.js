import angular from 'angular';
import uirouter from 'angular-ui-router';
import {upgradeAdapter} from '../upgrade_adapter';

import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';

import listRouting from './blog.routes';
import postRouting from './post/post.routes';

export default angular.module('aksiteApp.blog', [uirouter])
    .config(listRouting)
    .config(postRouting)
    .directive('blog', upgradeAdapter.downgradeNg2Component(BlogComponent))
    .directive('post', upgradeAdapter.downgradeNg2Component(PostComponent))
    .name;

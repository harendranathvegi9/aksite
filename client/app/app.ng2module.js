import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {AUTH_PROVIDERS} from 'angular2-jwt';
// import { AppComponent } from './app.component';
import { MainModule } from './main/main.ng2module';
import { DirectivesModule } from '../components/common.directives.ng2module';
import { AuthModule } from '../components/auth/auth.ng2module';
import { AccountModule } from './account/account.ng2module';
import { ProjectsModule } from './projects/projects.ng2module';
import { GalleriesModule } from './galleries/galleries.ng2module';
import { BlogModule } from './blog/blog.ng2module';

import { upgradeAdapter } from './upgrade_adapter';

upgradeAdapter.upgradeNg1Provider('socket');

@NgModule({
    providers: [AUTH_PROVIDERS],
    imports: [
        BrowserModule,
        HttpModule,
        MainModule,
        DirectivesModule,
        AuthModule,
        AccountModule,
        ProjectsModule,
        GalleriesModule,
        BlogModule,
    ],
    // declarations: [
    //     AppComponent,
    // ],
    // bootstrap: [AppComponent]
})
export class AppModule {}

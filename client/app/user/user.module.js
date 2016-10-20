import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from 'ui-router-ng2';
import { UserComponent } from './user.component';
import { UserService } from '../../components/auth/user.service';

@NgModule({
    imports: [
        BrowserModule,
        UIRouterModule.forChild({
            states: [{
                name: 'user',
                url: '/user/:id',
                component: UserComponent
            }]
        }),
    ],
    declarations: [
        UserComponent
    ],
    providers: [
        UserService
    ]
})
export class UserModule {}

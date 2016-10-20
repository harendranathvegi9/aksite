import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MdButtonModule, MdIconModule } from '@angular/material';
import { UIRouterModule } from 'ui-router-ng2';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        FormsModule,
        MdInputModule,
        MdButtonModule,
        MdIconModule,
        UIRouterModule.forChild({
            states: [{
                name: 'login',
                url: '/login',
                component: LoginComponent
            }, {
                name: 'signup',
                url: '/signup',
                component: SignupComponent
            }]
        }),
    ],
    declarations: [
        LoginComponent,
        SignupComponent,
    ]
})
export class AccountModule {}

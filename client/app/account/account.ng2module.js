import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MdButtonModule } from '@angular/material';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        FormsModule,
        MdInputModule,
        MdButtonModule,
    ],
    declarations: [
        LoginComponent,
        SignupComponent
    ]
})
export class AccountModule {}

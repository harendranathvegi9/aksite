import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MdButtonModule } from '@angular/material';

import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        FormsModule,
        MdInputModule,
        MdButtonModule,
    ],
    declarations: [
        LoginComponent
    ]
})
export class AccountModule {}

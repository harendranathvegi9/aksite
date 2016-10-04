import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user.component';
import { UserService } from '../../components/auth/user.service';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        UserComponent
    ],
    providers: [
        UserService
    ]
})
export class UserModule {}

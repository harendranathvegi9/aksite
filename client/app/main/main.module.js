import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SocketService } from '../../components/socket/socket.service';

@NgModule({
    declarations: [
        MainComponent
    ],
    providers: [
        SocketService
    ],
    exports: [
        MainComponent
    ],
})
export class MainModule {}

import { NgModule } from '@angular/core';
import { UIRouterModule } from 'ui-router-ng2';
import { MainComponent } from './main.component';
import { SocketService } from '../../components/socket/socket.service';

@NgModule({
    imports: [
        UIRouterModule.forChild({
            states: [{
                name: 'main',
                url: '/',
                component: MainComponent
            }]
        }),
    ],
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

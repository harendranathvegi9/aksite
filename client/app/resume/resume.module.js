import { NgModule } from '@angular/core';
import { UIRouterModule } from 'ui-router-ng2';

@NgModule({
    imports: [
        UIRouterModule.forChild({
            states: [{
                name: 'resume',
                onEnter() {
                    window.location = 'https://www.linkedin.com/in/koroluka';
                }
            }]
        }),
    ],
    providers: [],
    declarations: []
})
export class ResumeModule {}

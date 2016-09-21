import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ng2-bootstrap/components/collapse';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [CollapseModule, CommonModule],
    declarations: [
        NavbarComponent,
        FooterComponent
    ]
})
export class DirectivesModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.ng2module';
import { DirectivesModule } from '../components/common.directives.ng2module';

@NgModule({
    imports: [
        BrowserModule,
        MainModule,
        DirectivesModule,
    ],
    declarations: [
        // NavbarComponent,
        AppComponent,
        // FooterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

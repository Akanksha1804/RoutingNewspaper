import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MainBottomComponent } from './main-bottom/main-bottom.component';
import { RightOneComponent } from './right-one/right-one.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    MenuBarComponent,
    MainBottomComponent,
    RightOneComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}

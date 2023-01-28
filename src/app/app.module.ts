import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoolConnectedBoxDirective } from './cool-connected-box.directive';
import { BoxesContainerComponent } from './boxes-container/boxes-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CoolConnectedBoxDirective,
    BoxesContainerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

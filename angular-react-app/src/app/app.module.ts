import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactWrapperComponent } from './react-wrapper/react-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

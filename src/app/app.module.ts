import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SandboxModule } from "./modules/sandbox/sandbox.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SandboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

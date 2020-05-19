import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModernIpService } from 'src/Shared/modern-ip-finder.service';
import { IeMachineNameService } from 'src/Shared/ie-machine-name-finder.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ModernIpService,
    IeMachineNameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

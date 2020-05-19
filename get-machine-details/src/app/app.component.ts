import { Component, OnInit } from '@angular/core';
import { ModernIpService } from 'src/Shared/modern-ip-finder.service';
import { IeMachineNameService } from 'src/Shared/ie-machine-name-finder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'get-machine-details';
  machineDetails : any;
  allIps : any;

  constructor(private _ipService:ModernIpService, private _machineNameService:IeMachineNameService)
  {

  }

  ngOnInit()
  {
    const isIE = /msie\s|trident\//i.test(window.navigator.userAgent);
    const isEdge = /edg\//i.test(window.navigator.userAgent);
    const isChrome = /Chrome\//i.test(window.navigator.userAgent);
    const isFirefox = /Firefox\//i.test(window.navigator.userAgent);
    if(isIE)
      this.machineDetails = this._machineNameService.getMachineName();
    
    if(isEdge || isChrome || isFirefox)  {
      this._ipService.fetchIps();
      this.allIps = document.cookie;
    }
  }
}

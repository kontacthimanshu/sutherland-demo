import { Injectable } from '@angular/core';

declare let ip$;

@Injectable()
export class ModernIpService
{
    fetchIps()
    {
        ip$.fetchIps();
    }
}
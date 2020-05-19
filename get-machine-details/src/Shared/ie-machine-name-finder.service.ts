import { Injectable } from '@angular/core';

declare let mac$;

@Injectable()
export class IeMachineNameService
{
    getMachineName()
    {
        return mac$.getMachineName();
    }
}
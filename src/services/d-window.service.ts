import { Injectable } from '@angular/core';

@Injectable()

export class DriverWindowService {


    get windowRef(){
        return window
    }
}
import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    constants = {};

    constructor() {
        this.constants = require('../../server/config/environment/shared');
        return this.constants;
    }

    get() {
        return this.constants;
    }
}

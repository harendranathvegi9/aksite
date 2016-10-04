import { UpgradeAdapter } from '@angular/upgrade';
import { forwardRef } from '@angular/core';

export const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));

var AppModule = require('./app.module.js').AppModule;

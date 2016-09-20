import { UpgradeAdapter } from '@angular/upgrade';
import { forwardRef } from '@angular/core';
import { AppModule } from './app.ng2module';

export const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));

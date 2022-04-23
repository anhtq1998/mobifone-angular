import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module'

import { CardfunctionmodComponent } from './cardfunctionmod/cardfunctionmod.component';

import { ListworkComponent } from './listwork/listwork.component';

@NgModule({
  imports: [WelcomeRoutingModule, DemoNgZorroAntdModule],
  declarations: [WelcomeComponent,CardfunctionmodComponent,ListworkComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }

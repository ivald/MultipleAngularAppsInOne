
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { NavComponent } from './nav/nav.component';
import { View2Component } from './view2/view2.component';
import { RoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    NavComponent,
    View2Component
  ],
  imports: [
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class App1SharedModule { }

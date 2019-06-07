import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

export const routes: Routes = [
  { path: 'app1/one', component: View1Component },
  { path: 'app1/two', component: View2Component },
  { path: 'app1', redirectTo: 'app1/one' }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

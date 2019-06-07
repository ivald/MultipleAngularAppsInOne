import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'app1',
    loadChildren: () => import('../../projects/app1/src/app/app.module').then(mod => mod.App1SharedModule)
  },
  {
    path: 'app2',
    loadChildren: () => import('../../projects/app2/src/app/app.module').then(mod => mod.App2SharedModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

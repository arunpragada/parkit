import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KioskPage } from './kiosk.page';

const routes: Routes = [
  {
    path: '',
    component: KioskPage
  },
  {
    path: 'kiosk-all/manual',
    loadChildren: () => import('./manual/manual.module').then( m => m.ManualPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KioskPageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordsManagementComponent } from './records-management/records-management.component';

const routes: Routes = [{
    path:'records',
    component: RecordsManagementComponent
  },
  {
    path: '',
    redirectTo: 'records',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

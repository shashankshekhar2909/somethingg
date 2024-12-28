import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';

const routes: Routes = [
  {
    path:'',
    component:LoadingComponent,
    title:'Somethingg'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

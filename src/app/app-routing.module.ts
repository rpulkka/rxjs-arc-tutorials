import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObservableComponent } from './observable/observable.component';
import { OfOperatorComponent } from './of-operator/of-operator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'of', component: OfOperatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

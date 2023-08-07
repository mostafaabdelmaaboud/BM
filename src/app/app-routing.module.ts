import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertCurrenciesComponent } from './convert-currencies/convert-currencies.component';

const routes: Routes = [
  { path: "", component: ConvertCurrenciesComponent },
  { path: ":detail", loadChildren: () => import('./details/details.module').then((m) => m.DetailsModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

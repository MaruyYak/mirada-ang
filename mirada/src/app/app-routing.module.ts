import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ValuesComponent } from './pages/values/values.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'vision-values', component: ValuesComponent },
  // { path: 'about', component: },
  // { path: 'privacy', component:  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
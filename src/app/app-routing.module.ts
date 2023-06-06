import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'template-driven', loadChildren: () => import('./form-template-driven/form-template-driven.module').then(m => m.FormTemplateDrivenModule) }, { path: 'reactive', loadChildren: () => import('./form-reactive/form-reactive.module').then(m => m.FormReactiveModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

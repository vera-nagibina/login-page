import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageTableComponent } from './page-table/page-table.component';
import { AuthGuard } from './page-login/services/auth.guard';

const routes: Routes = [
     
      {path:'login', component: PageLoginComponent},
      {path:'', component: PageTableComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexUserComponent } from './components/index-user/index-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: IndexUserComponent },
  { path: 'user/create', component: CreateUserComponent },
  { path: 'user/edit/:id', component: EditUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

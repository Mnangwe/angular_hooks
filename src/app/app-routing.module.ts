import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserboardComponent } from './userboard/userboard.component';
import { UserLeftComponent } from './user-left/user-left.component';
import { UserRightComponent } from './user-right/user-right.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "user-board", component: UserboardComponent, children: [
    { path: 'user-left', component: UserLeftComponent },
    { path: 'user-right', component: UserRightComponent }
  ]},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

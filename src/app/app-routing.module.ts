import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './cover/login/login.component';
import { SignInComponent } from './cover/sign-in/sign-in.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from 'src/assets/guards/Auth.guard';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: SignInComponent},
  { path: 'home', component: MenuComponent, 
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

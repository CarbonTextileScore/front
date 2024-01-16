import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from 'src/assets/guards/Auth.guard';
import { QuotaDashbaordComponent } from './menu/quota-dashbaord/quota-dashbaord.component';
import { TrainingComponent } from './menu/training/training.component';
import { BarterComponent } from './menu/barter/barter.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: SignInComponent},
  { path: 'home', component: MenuComponent, children:[
    { path: '',   redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: QuotaDashbaordComponent},
    { path: 'training', component: TrainingComponent},
    { path: 'barter', component: BarterComponent},
  ], 
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/home/dashboard', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule,CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MainService } from 'src/services/main.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { QuotaDashbaordComponent } from './menu/quota-dashbaord/quota-dashbaord.component';
import { BarterComponent } from './menu/barter/barter.component';
import { TrainingComponent } from './menu/training/training.component';
import { LoginComponent } from './login/login.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginService } from './login/login.service';
import { BarterService } from './menu/barter/barter.service';
import { TrainingService } from './menu/training/training.service';
import { AuthService } from 'src/services/auth.service';
import { QuotaDashboardService } from './menu/quota-dashbaord/quota-dashboard.service';
import { TrainingDialogComponent } from './menu/training/training-dialog/training-dialog.component';

import { QuotaDialogComponent } from './menu/quota-dashbaord/quota-dialog/quota-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    QuotaDashbaordComponent,
    BarterComponent,
    TrainingComponent,
    LoginComponent,
    TrainingDialogComponent,
    QuotaDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatChipsModule,
    MatDialogModule,
    MatSidenavModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [AuthService, MainService, LoginService, BarterService, QuotaDashboardService, TrainingService],

  bootstrap: [AppComponent]
})
export class AppModule {
  /*
  constructor(private injector: Injector) {
    customElements.define('circle-progress-quota', CircleProgress);
  }
  ngDoBootstrap() {}*/
}

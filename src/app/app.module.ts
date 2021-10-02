import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CloseComponent } from './icons/close.component';
import { LoginComponent } from './icons/login.component';
import { OpenComponent } from './icons/open.component';
import { PasswordComponent } from './icons/password.component';
import { ExitComponent } from './icons/exit.component';
import { CardComponent } from './page-table/card.component/card.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { AuthService } from './page-login/services/auth.service';
import { AuthGuard } from './page-login/services/auth.guard';
import { PageTableComponent } from './page-table/page-table.component';
import { TableService } from './page-table/services/table.service';

@NgModule({
  declarations: [
    AppComponent,
    CloseComponent,
    LoginComponent,
    OpenComponent,
    PasswordComponent,
    PageLoginComponent,
    CardComponent,
    ExitComponent,
    PageTableComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }

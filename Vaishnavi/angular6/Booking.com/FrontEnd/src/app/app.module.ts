import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';

import { SeatsInformationComponent } from './components/seats-information/seats-information.component';
import { FailedComponent } from './components/failed/failed.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'seatsInformations', component: SeatsInformationComponent},
  { path: 'paymentGateway', component: PaymentComponent},
  { path: 'paymentSuccess', component: SuccessComponent},
  { path: 'paymentFailure', component: FailedComponent}, 
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentComponent,
    SeatsInformationComponent,
    FailedComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'payform', component: PaymentFormComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PaymentFormComponent
  ],
  imports: [
  RouterModule.forRoot(routes),
    BrowserModule,
	FormsModule,
	HttpClientModule
  ],
     exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

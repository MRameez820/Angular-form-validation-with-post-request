import { Component, OnInit, OnDestroy } from '@angular/core';
import { Payment } from './../models/payment';
import { PayserviceService } from './../services/payservice.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit,OnDestroy {
 paydto = new Payment();
 error : String = "";
 subscription = new Subscription();
  constructor(public payservice : PayserviceService) { }

  ngOnInit(): void {
	  this.paydto.cardnumber = "";
	  this.paydto.cardholder = "";
	  this.paydto.expdate  = null;
	  this.paydto.seccode = "";
	  this.paydto.amount = 0;
  }
  ngOnDestroy() {
  this.subscription.unsubscribe();
  }

  sendrequest()
  {
	let cardate = new Date(this.paydto.expdate);
    let toddate	= new Date();
	if(this.paydto.cardnumber.length < 1)
	  { this.error = "Card number is required";}
	  else if(this.paydto.cardholder.length < 1)
	  {this.error = "Card holder is required";}
	  else if(this.paydto.expdate == null)
	  {this.error = "Expiration date is required";}		  
	  else if(cardate < toddate)
      {this.error = "Invalid expiration Date";}	
    else if(this.paydto.seccode.length > 3 )
      {this.error = "Security code not valid";}	
	  else if(this.paydto.amount == 0 )
      {this.error = "Amount Should be greater then 0";}	 
	else{	
		this.error = "";
		this.subscription = this.payservice.sendpayrequest(this.paydto).subscribe( data => {
	console.log(data);
	});
	}
	
  } 
  
}

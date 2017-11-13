import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {User} from "./../user";
@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisComponent implements OnInit {
  user:User;
  success:string;
  
  constructor() {
    this.user=new User();
    
   }
  create(){
    this.success=`Thank you for registering with us ${this.user.firstname}. We just sent you a confirmation email at ${this.user.email}, and we will send all mail to ${this.user.streetaddress} ${this.user.city} ${this.user.state}. \nHave a wonderful day!`;
    this.user=new User();
  }
  ngOnInit() {
  }

}

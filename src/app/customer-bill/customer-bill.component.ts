import { Component, OnInit } from '@angular/core';
import { ExampleServiceService } from '../example-service.service';
@Component({
  selector: 'app-customer-bill',
  templateUrl: './customer-bill.component.html',
  styleUrls: ['./customer-bill.component.css']
})
export class CustomerBillComponent implements OnInit {

  constructor(private api: ExampleServiceService) {
    
   }
userObj:any;
user:any;
total:any;
  ngOnInit() {
    let a  = this.api.getuser();
    this.user=a.name;
   this.total=this.api.getTotal();
  }

}

import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import { User } from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';



@Injectable()
export class ExampleServiceService {
  constructor(public _http: Http) { }
  
  user: User;

data12:any;
grandTotal:any;
customer = {};

  // getCustomers(val): Observable<any> {

  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json')
  //   //   headers.append('Authorization', 'Bearer '+ this.JWT )
  //   let options = new RequestOptions({ headers: headers });
  //   console.log(val+"from api");
  //   return this._http.post('http://localhost:8888/api/v1/getCustomer', val, options).map
  //   (data => data.json());
  // }
  

  getCustomers(a): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    let options = new RequestOptions({ headers: headers });
    console.log(a)
    return this._http.post('http://localhost:8888/api/v1/getCustomer', a, options).map(
      data => data.json()
    );
}

getProducts(): Observable<any> {
  return this._http.get('http://localhost:8888/api/v1/getallproducts').map(
    data => data.json()
  );
}


getProductById(item): Observable<any> {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json')
  let options = new RequestOptions({ headers: headers });
  console.log(item, typeof(item) , "in service");
  let items = {
    "item" : item
  }
  return this._http.post('http://localhost:8888/api/v1/getProductById',items,options).map(
    data => data.json()
    
)
  
}

  createUser(form): Observable<any> {

    console.log(form)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')

    let options = new RequestOptions({ headers: headers });
    

    return this._http.post('http://localhost:8888/api/v1/Customer/create', form, options).map(data => { });
  }
  name;
  setUser(userr) {
    this.customer = userr;
    console.log(this.customer);
  }
  getuser():any {
    console.log(this.customer,"hellooooo");
    return this.customer;
  }

  setTotal(total)
  {
    this.grandTotal=total;
    console.log(this.grandTotal , "grandtotal in sevice")
  }
  getTotal():any
  {
    console.log("total",this.grandTotal)
    return this.grandTotal;
  }
}

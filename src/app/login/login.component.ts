import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ExampleServiceService } from '../example-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../user';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';

import { Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ng2-facebook-sdk';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
userObj:any;
  constructor(private api: ExampleServiceService, private formBuilder: FormBuilder, private route: Router, private fb: FacebookService) {


    fb.init({
      appId: '1856062044722303',
      version: 'v2.10'
    });


    
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })


  }


  ngOnInit() {



  }
  setUserfb(res)
  {
this.userObj=res;
console.log(this.userObj, "setuserfb")
this.api.setUser(this.userObj)
  }
  login() {
    this.fb.login()
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
        this.fb.api('/me')
          .then((res: any) => {
            console.log('Got the users profile', res);
            
            this.setUserfb(res);
            // alert("Hello " + res.name);
            // console.log(this.userObj);
            // this.api.setUser(this.userObj);
            
            this.route.navigate(['productlist'])
          })
      })
      .catch(Error);
  }
  check() {
    console.log(this.loginForm.value)
    this.api.getCustomers(this.loginForm.value).subscribe(res => {
      console.log(res.status)
      if (res.status == true) {
        this.route.navigate(['productlist'])
      }
      else {
        alert("login again")
      }
    }
    )


  }


}


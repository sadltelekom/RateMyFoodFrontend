import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginserviceService } from 'src/app/serv/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice: LoginserviceService,private router:Router) {}

  ngOnInit(): void {
    
  }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(this.loginservice.getUsername(), [Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z ]*$')]
    ), 
    password: new FormControl(this.loginservice.getPassword(),[Validators.required])
  
    });
  
  login() {
    
    this.loginservice.setUser(this.loginForm.value);
    
    
    this.router.navigate(['']);
   }  

}

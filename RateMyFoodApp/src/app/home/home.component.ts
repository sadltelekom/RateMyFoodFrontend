import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../serv/loginservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string= "";

  constructor( private loginservice: LoginserviceService, private router: Router) { 
    this.username = this.loginservice.getUsername();
  }

  ngOnInit(): void {
  }
 
}

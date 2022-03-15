import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../serv/loginservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string= "";

  constructor(loginservice: LoginserviceService) { 
    this.username = loginservice.getUsername();
  }

  ngOnInit(): void {
  }

}

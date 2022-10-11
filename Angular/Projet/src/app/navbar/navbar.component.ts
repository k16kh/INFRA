import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { StylesService } from '../Services/styles.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 constructor(private status:StylesService,private router:Router) { }
   ngOnInit(): void {
  }
logout(){
  localStorage.removeItem("token");
  localStorage.removeItem("expire");
  this.status.changestatus();
  this.status.changestyleadmin();
this.router.navigate(["login"]);
}
}

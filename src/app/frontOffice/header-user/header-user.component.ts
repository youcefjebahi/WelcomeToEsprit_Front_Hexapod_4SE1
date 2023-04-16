import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent{

  constructor(private authService: AuthService, private router: Router, private cookieService: CookieService) {}
  logedIn=this.authService.isLoggedIn();
  logout(){
    this.authService.logout().subscribe(() => {
      this.cookieService.delete('token');
      window.location.href = 'http://localhost:4200/';
    });
  }
  
}

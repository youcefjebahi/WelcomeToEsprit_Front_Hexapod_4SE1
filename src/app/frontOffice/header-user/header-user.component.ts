import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent{

  constructor(private authService: AuthService, private router: Router, private cookieService: CookieService, private userService: UserService) {}
  logedIn=this.authService.isLoggedIn();

  mail=this.authService.getSubject();
  user!:User;
  ngOnInit() {  
    if (this.mail)
    this.userService.getUserbyMail(this.mail)
    .subscribe((user) => {
      this.user = user;
    });
    };

  logout(){
    this.authService.logout().subscribe(() => {
      this.cookieService.delete('token');
      this.cookieService.deleteAll();
      window.location.href = 'http://localhost:4200/';
    });
  }
  
}

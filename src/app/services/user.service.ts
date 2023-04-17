import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url="http://localhost:1111/welcometoesprit/api/user";

  getUserbyMail(mail:string){
    return this.http.get<User>(this.url+`/getUserbyMail/${mail}`);

  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url="http://localhost:1111/welcometoesprit/api/user";

  getUserbyMail(mail:string){
    return this.http.get<User>(this.url+`/getUserbyMail/${mail}`);
  }
  getUserById(id:number){
    return this.http.get<User>(this.url+`/getUserById/${id}`);

  }
  addUser(cin:string,
    firstName:string,
    lastName:string,
    gender:string,
    image:File,
    birthDate:Date,
    address:string,
    phone:string,
    mail:string,
    password:string,
    bacSection:string,
    educationLevel:string,
    speciality:string): Observable<any> {

    const formData: FormData = new FormData();
    formData.append('cin', cin);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('gender', gender);
    formData.append('image', image);
    /*const formattedDate = new Date(birthDate).toISOString().substring(0, 10);
    formData.append('birthDate', formattedDate);*/
    
    formData.append('address', address);
    formData.append('phone', phone);
    formData.append('mail', mail);
    formData.append('password', password);
    formData.append('bacSection', bacSection);
    formData.append('educationLevel', educationLevel);
    formData.append('speciality', speciality);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post(this.url + '/addUser', formData, { headers: headers });
}

updateUser(
  id: number,
  cin?: string,
  firstName?: string,
  lastName?: string,
  gender?: string,
  image?: File,
  birthDate?:Date,
  address?: string,
  phone?: string,
  mail?: string,
  password?: string,
  Department?: string,
  HiringDate?: Date,
  evaluator?: boolean,
  jury?: boolean,
  speaker?: boolean,
  bacSection?: string,
  educationLevel?: string,
  speciality?: string,
  classe?: string,
  role?: string): Observable<any> {

const formData: FormData = new FormData();
formData.append('id', id.toString());
if (cin) formData.append('cin', cin);
if (firstName) formData.append('firstName', firstName);
if (lastName) formData.append('lastName', lastName);
if (gender) formData.append('gender', gender);
if (image) formData.append('image', image);
if (birthDate) formData.append('birthDate', birthDate.toISOString());
if (address) formData.append('address', address);
if (phone) formData.append('phone', phone);
if (mail) formData.append('mail', mail);
if (password) formData.append('password', password);
if (Department) formData.append('Department', Department);
if (HiringDate) formData.append('HiringDate', HiringDate.toISOString());
if (evaluator) formData.append('evaluator', evaluator.toString());
if (jury) formData.append('jury', jury.toString());
if (speaker) formData.append('speaker', speaker.toString());
if (bacSection) formData.append('bacSection', bacSection);
if (educationLevel) formData.append('educationLevel', educationLevel);
if (speciality) formData.append('speciality', speciality);
if (classe) formData.append('classe', classe);
if (role) formData.append('role', role);

const headers = new HttpHeaders();
headers.append('Content-Type', 'multipart/form-data');
headers.append('Accept', 'application/json');

return this.http.put(this.url + '/updateUser', formData, { headers: headers });
}

}

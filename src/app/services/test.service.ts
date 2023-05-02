import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from '../models/test';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class TestService {
 

  constructor(private http: HttpClient) { }
  private url = "http://localhost:1111/welcometoesprit/api/test";


  createNewTest(test: Test): Observable<any> {
    return this.http.post<Test>(this.url+'/createNewTest', test);
  }
  addOrUpdate(test:Test):Observable<any> {
    return this.http.put<Test>(this.url+'/addOrUpdate',test); 
  }
  getTestById(id:number){
    return this.http.get<Test>(this.url+`/getTestById/${id}`);

  }
  getTest(){
    return this.http.get<Test[]>(this.url+'/getTest');
  }
  removeTestById(id:number){
    return this.http.delete(this.url+`/removeTestById/${id}`);
  }
  

  }

  


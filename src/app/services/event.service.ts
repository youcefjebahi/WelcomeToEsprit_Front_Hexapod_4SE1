import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from 'src/app/models/event';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }
  url="http://localhost:1111/welcometoesprit/api/event";
  getEvents(){
    return this.http.get<Event[]>(this.url+'/getEvents');
  }
  addEvent(event: Event){
    return this.http.post<Event>(this.url+`/ajouterEvent?name=${event.name}&space=${event.space}%20J&date=${event.date}`,event);
  }
  updateEvent(event:Event){
    return this.http.put<Event>(this.url+'/Update',event);
  }
  getEventById(id:number){
    return this.http.get<Event>(this.url+`/getEventById/${id}`);

  }
  deleteEvents(id:number){
    return this.http.delete(this.url+`/Delete?event_id=${id}`);
  }
}

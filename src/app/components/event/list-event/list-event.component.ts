import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent {
  eventList!:Event[];

  constructor(private router:Router,private eventService:EventService,private authService: AuthService){}
  role=this.authService.getRole();
  ngOnInit(): void {
    this.getEvents();
    

  }
  getEvents(){
    this.eventService.getEvents().subscribe(
      data =>  this.eventList=data 
      );
  }
  deleteEvent(id:number){
    this.eventService.deleteEvents(id).subscribe(
      ()=> {
        this.getEvents();
        alert('Deleted!');
      }
    );
  }

  
  }

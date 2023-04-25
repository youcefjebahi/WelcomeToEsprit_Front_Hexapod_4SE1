import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  event!:Event;
  dateValue: string;
  constructor(private eventService:EventService, private router: Router){
    this.dateValue = new Date().toISOString().slice(0, 10);
  }
  
  addEvent(form: NgForm): void {
    this.event = new Event();
    this.event.name = form.controls['Name'].value;
    this.event.date = form.controls['date'].value;
    this.event.space = form.controls['space'].value;
    this.event.planning = form.controls['planning'].value;


    this.eventService.addEvent(this.event).subscribe(() => {
        this.router.navigate(['/admin/getEvents']);
      });
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css']
})
export class ShowEventComponent {
  constructor(private eventService:EventService,private route: ActivatedRoute){}
  event=new Event();
  ngOnInit() {  
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.getEventById(id);
    });
  }
  

  getEventById(id: number) {
    this.eventService.getEventById(id).subscribe(data => {this.event = data;});
  }
}

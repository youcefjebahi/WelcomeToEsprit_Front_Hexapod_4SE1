import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-show-offer',
  templateUrl: './show-offer.component.html',
  styleUrls: ['./show-offer.component.css']
})
export class ShowOfferComponent {
  constructor(private offerService:OfferService,private route: ActivatedRoute){}
  offer=new Offer();
  ngOnInit() {  
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.getOfferById(id);
    });
  }
  

  getOfferById(id: number) {
    this.offerService.getOfferById(id).subscribe(data => {this.offer = data;});
  }
}



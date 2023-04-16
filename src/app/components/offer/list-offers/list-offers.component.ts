import { Component } from '@angular/core';
import { Router, provideRouter } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { AuthService } from 'src/app/services/auth.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.css']
})
export class ListOffersComponent {

  offerList!:Offer[];

  constructor(private router:Router,private offerService:OfferService,private authService: AuthService){}
  role=this.authService.getRole();
  ngOnInit(): void {
    this.getOffers();
  }
  getOffers(){
    this.offerService.getAlloffers().subscribe(
      data =>  this.offerList=data 
      );
  }
  deleteOffer(id:number){
    this.offerService.deleteOffer(id).subscribe(
      ()=> {
        this.getOffers();
        alert('Deleted!');
      }
    );
  }
}

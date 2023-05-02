import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferCandidacy } from 'src/app/models/offer-candidacy';
import { AuthService } from 'src/app/services/auth.service';
import { OfferCandidacyService } from 'src/app/services/offer-candidacy.service';

@Component({
  selector: 'app-list-offer-candidacies',
  templateUrl: './list-offer-candidacies.component.html',
  styleUrls: ['./list-offer-candidacies.component.css']
})
export class ListOfferCandidaciesComponent {
  offerCandidaciesList!:OfferCandidacy[];
  id!:number;

  constructor(private router:Router,private offerCandidacyService:OfferCandidacyService,private authService: AuthService, private route: ActivatedRoute,){}
  role=this.authService.getRole();
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.id=id;
      this.getOfferCandidaciesByOfferId(id);
     
    });
  }
  getOfferCandidaciesByOfferId(id: number){
    this.offerCandidacyService.getOfferCandidaciesByOfferId(id).subscribe(
      data =>  this.offerCandidaciesList=data 
      );
  }
  onAccept(id:number){
    this.offerCandidacyService.updateOfferCandidacyStatus(id,"accepted").subscribe(() => {
      this.offerCandidacyService.getOfferCandidaciesByOfferId(this.id).subscribe(
        data =>  this.offerCandidaciesList=data 
        );

      });
  }
  onReject(id:number){
    this.offerCandidacyService.updateOfferCandidacyStatus(id,"rejected").subscribe(() => {
    this.offerCandidacyService.getOfferCandidaciesByOfferId(this.id).subscribe(
      data =>  this.offerCandidaciesList=data 
      );

    });

  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { OfferCandidacy } from 'src/app/models/offer-candidacy';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { InterviewService } from 'src/app/services/interview.service';
import { OfferCandidacyService } from 'src/app/services/offer-candidacy.service';
import { OfferService } from 'src/app/services/offer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-offer-candidacy',
  templateUrl: './add-offer-candidacy.component.html',
  styleUrls: ['./add-offer-candidacy.component.css']
})
export class AddOfferCandidacyComponent {
  loading = false;

  establishment: string = '';
  docDiploma?: File;
  docCV?: File;



  
  docLetter?: File;
  days!: string[];
  hours!: string[];
  day: string = '';
  day1: string = '';

  hour: string = '';
  constructor(private authService: AuthService,private offerCandidacyService:OfferCandidacyService, private offerService:OfferService, private interviewService:InterviewService ,private router: Router,private route: ActivatedRoute){}
  idOffer!:number;
  
  ngOnInit() {  
    this.route.paramMap.subscribe(params => {
      const idOffer = Number(params.get('id'));
      this.idOffer=idOffer;
    });
    this.interviewService.getDays(1).subscribe(days => {
      this.days = days;
    });
  }
  onDocCVSelect(event: any) {
    this.docCV = event.target.files[0];
}

onDocDiplomaSelect(event: any) {
    this.docDiploma = event.target.files[0];
}

onDocLetterSelect(event: any) {
    this.docLetter = event.target.files[0];
}
    
addOfferCandidacy(F:NgForm) {

  this.establishment = F.controls['establishment'].value;
  this.day = F.controls['day'].value;
  this.hour = F.controls['hour'].value;

  if (this.docDiploma instanceof File && this.docCV instanceof File && this.docLetter instanceof File) {
    
    this.loading = true;

    this.offerCandidacyService.addOfferCandidacy(this.idOffer, this.establishment, this.docDiploma, this.docCV, this.docLetter, this.day, this.hour)
      .subscribe(
        data => {
          const idOfferCandidacyCreated=data.id;
          this.router.navigate([`/offerCandidacy/show/${idOfferCandidacyCreated}`]);
          this.loading = false;

      }
      );
  } else {
    console.log('docDiploma is not a File or is undefined');
  }

}

updateHours() {
  this.interviewService.getHours(this.day1, 1).subscribe(hours => {
    this.hours = hours;
  });
}


}


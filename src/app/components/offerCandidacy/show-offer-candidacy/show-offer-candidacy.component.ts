import { Component, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfferCandidacy } from 'src/app/models/offer-candidacy';
import { OfferCandidacyService } from 'src/app/services/offer-candidacy.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { ShowUserComponent } from '../../user/show-user/show-user.component';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Interview } from 'src/app/models/interview';
import { InterviewService } from 'src/app/services/interview.service';



@Component({
  selector: 'app-show-offer-candidacy',
  templateUrl: './show-offer-candidacy.component.html',
  styleUrls: ['./show-offer-candidacy.component.css']
})

export class ShowOfferCandidacyComponent {
  constructor(private offerCandidacyService:OfferCandidacyService,private authService:AuthService, private route: ActivatedRoute,private userService:UserService,private interviewService:InterviewService){}
  role=this.authService.getRole();
  offerCandidacy!:OfferCandidacy;
  mail=this.authService.getSubject();
  user!:User;
  interview!:Interview;

  ngOnInit() {  
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.getOfferCandidacyById(id);
     this.interviewService.getInterviewByOfferCandidacyId(id).subscribe(
      data => {
        this.interview = data;
        console.log(data.user.id);
    });

    });
    if (this.mail)
    this.userService.getUserbyMail(this.mail)
    .subscribe((user) => {
      this.user = user;
      console.log(user.id)
    });
  }
  getOfferCandidacyById(id: number) {
    this.offerCandidacyService.getOfferCandidacyById(id).subscribe(
      data => {
        this.offerCandidacy = data;
    });
  }
  toggleFullScreen(event: MouseEvent) {
    const mediaContainer = event.currentTarget as HTMLElement;
    const media = mediaContainer.querySelector('.media') as HTMLElement;
    if (mediaContainer.classList.contains('fullscreen')) {
      mediaContainer.classList.remove('fullscreen');
    } else {
      mediaContainer.classList.add('fullscreen');
    }
  }

  
  
}

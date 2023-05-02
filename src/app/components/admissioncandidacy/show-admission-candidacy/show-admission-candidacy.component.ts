import { Component,NgModule } from '@angular/core';
import { AdmissioncandidacyService } from 'src/app/services/admissioncandidacy.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import {AdmissionCandidacy  } from 'src/app/models/admission-candidacy';
import { Interview } from 'src/app/models/interview';
import { InterviewService } from 'src/app/services/interview.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-admission-candidacy',
  templateUrl: './show-admission-candidacy.component.html',
  styleUrls: ['./show-admission-candidacy.component.css']
})
export class ShowAdmissionCandidacyComponent {
  constructor(private admissioncandidacyService:AdmissioncandidacyService,private authService:AuthService, private route: ActivatedRoute,private userService:UserService,private interviewService:InterviewService){}
  role=this.authService.getRole();
  admissionCandidacy!:AdmissionCandidacy;
  mail=this.authService.getSubject();
  user!:User;
  interview!:Interview;
  admissioncandidacies!:AdmissionCandidacy[];
  ngOnInit() {  
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.getAdmissionCandidacyById(id);
    
  });
  if (this.mail)
    this.userService.getUserbyMail(this.mail)
    .subscribe((user) => {
      this.user = user;
      console.log(user.id)
    });
  }
  getAdmissionCandidacy(){
    this.admissioncandidacyService.getAdmissionCandidacy().subscribe(
      data =>  this.admissioncandidacies=data 
      );
  }
  getAdmissionCandidacyById(id: number) {
    this.admissioncandidacyService. getAdmissionCandidacyById(id).subscribe(
      data => {
        this. admissionCandidacy   = data;
    });
  }
  deleteAdmissionCandidacy(id:number){
    this.admissioncandidacyService.deleteAdmissionCandidacy(id).subscribe(
      ()=> {
        this.getAdmissionCandidacy();
        alert('Deleted!');
        
      }
    );
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


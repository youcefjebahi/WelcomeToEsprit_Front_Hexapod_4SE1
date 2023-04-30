import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Interview } from 'src/app/models/interview';
import { InterviewService } from 'src/app/services/interview.service';

@Component({
  selector: 'app-show-interview',
  templateUrl: './show-interview.component.html',
  styleUrls: ['./show-interview.component.css']
})
export class ShowInterviewComponent {
   @Input() interview!: Interview;
  constructor(private interviewService: InterviewService,private route: ActivatedRoute){}
  
  ngOnInit() {  
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.getInterviewByOfferCandidacyId(id);
    });
  }
  getInterviewByOfferCandidacyId(id: number) {
    this.interviewService.getInterviewByOfferCandidacyId(id).subscribe(
      data => {
        this.interview = data;
    });
  }
}

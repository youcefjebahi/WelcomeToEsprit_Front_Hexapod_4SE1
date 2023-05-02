import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Achievement } from 'src/app/models/achievement';
import { AchievementService } from 'src/app/services/achievement.service';

@Component({
  selector: 'app-show-achievement',
  templateUrl: './show-achievement.component.html',
  styleUrls: ['./show-achievement.component.css']
})
export class ShowAchievementComponent {
  constructor(private achievementService:AchievementService,private route: ActivatedRoute,private sanitizer: DomSanitizer){}
  achievement=new Achievement();
 
  showImage: boolean = false; // add this line
  showVideo: boolean = false;
  showPdf: boolean = false;
  ngOnInit() {  
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.getAchievementById(id);
    });
  }
  

  getAchievementById(id: number) {
    this.achievementService.getAchievementById(id).subscribe(data => {this.achievement = data;});
  }
  getDocLetterUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf;base64,' + this.achievement.video);
  }

  toggleImage() {
    this.showImage = !this.showImage;
    this.showVideo = false;
    this.showPdf = false;
  }
  toggleVideo() {
    this.showVideo = !this.showVideo;
    this.showImage = false;
    this.showPdf = false;
  }
  
  togglePdf() {
    this.showPdf = !this.showPdf;
    this.showImage = false;
    this.showVideo = false;
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
  getFileFormat(data: string): string {
    const signature = data.substring(0, 10);
    switch (signature) {
      case 'iVBORw0KGg': // PNG
        return 'png';
      case 'JVBERi0xLj': // PDF
        return 'pdf';
        case '/9j/4AAQSk': // JPEG
        return 'jpeg';
      default:
        return '';
    }
  }
}

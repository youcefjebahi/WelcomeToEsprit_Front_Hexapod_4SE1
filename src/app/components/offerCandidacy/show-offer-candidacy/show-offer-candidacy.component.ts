import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfferCandidacy } from 'src/app/models/offer-candidacy';
import { OfferCandidacyService } from 'src/app/services/offer-candidacy.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-show-offer-candidacy',
  templateUrl: './show-offer-candidacy.component.html',
  styleUrls: ['./show-offer-candidacy.component.css']
})
export class ShowOfferCandidacyComponent {
  constructor(private offerCandidacyService:OfferCandidacyService,private authService:AuthService, private route: ActivatedRoute,private sanitizer: DomSanitizer){}
  role=this.authService.getRole();
  offerCandidacy!:OfferCandidacy;
  showImage: boolean = false; // add this line
  showVideo: boolean = false;
  showPdf: boolean = false;
  ngOnInit() {  
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.getOfferCandidacyById(id);
    });
  }
  getOfferCandidacyById(id: number) {
    this.offerCandidacyService.getOfferCandidacyById(id).subscribe(
      data => {
        this.offerCandidacy = data;
    });
  }
  getDocLetterUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf;base64,' + this.offerCandidacy.docLetter);
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

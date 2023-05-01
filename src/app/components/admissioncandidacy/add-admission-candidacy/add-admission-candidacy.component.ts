import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdmissioncandidacyService } from 'src/app/services/admissioncandidacy.service';
import { InterviewService } from 'src/app/services/interview.service';

@Component({
  selector: 'app-add-admission-candidacy',
  templateUrl: './add-admission-candidacy.component.html',
  styleUrls: ['./add-admission-candidacy.component.css']
})
export class AddAdmissionCandidacyComponent {
  loading = false;

  days!: string[];
  hours!: string[];
  day1: string = '';

  docBacDiplomaValid=false;
  docBacReleveValid=false;
  docReleve1Valid=false;
  docReleve2Valid=false;
  docCertificateValid=false;
  docBacReleve3Valid=false;
  docBacReleve4Valid=false;
  docDiplomaValid=false;

  docBacDiplomaSrc!:string;
  docBacReleveSrc!:string;
  docReleve1Src!:string;
  docReleve2Src!:string;
  docCertificateSrc!:string;
  docReleve3Src!:string;
  docReleve4Src!:string;
  docDiplomaSrc!:string;


  constructor(private admisstionCandidacyService:AdmissioncandidacyService,private interviewService:InterviewService){}

    bac!: boolean;
    docBacDiploma!: File;
    bacMoy!: number;
    docBacReleve!: File;
    bacYear!: string;
    bacEstablishment!: string;
    bacGovernorate!: string;
    moy1!: number;
    docReleve1!: File;
    moy2!: number;
    docReleve2!: File;
    docCertificate!: File;
    moy3!: number;
    docReleve3!: File;
    moy4!: number;
    docReleve4!: File;
    diploma!: boolean;
    docDiploma!: File;
    level!: string;
    speciality!: string;
    day!: string;
    hour!: string;
    levels: string[] = ["1", "2", "3", "4"];


    ngOnInit(): void {
      this.interviewService.getDays(2).subscribe(days => {
        this.days = days;
      });
   }
   createNewCandidacy(F:NgForm) {

    this.bac = F.controls['bac'].value;
    if(F.controls['bacMoy'])
    this.bacMoy = F.controls['bacMoy'].value;
    this.bacYear = F.controls['bacYear'].value;
    this.bacEstablishment = F.controls['bacEstablishment'].value;
    this.bacGovernorate = F.controls['bacGovernorate'].value;
    if(F.controls['moy1'])
    this.moy1 = F.controls['moy1'].value;
    if(F.controls['moy2'])
    this.moy2 = F.controls['moy2'].value;
    if(F.controls['moy3'])
    this.moy3 = F.controls['moy3'].value;
    if(F.controls['moy4'])
    this.moy4 = F.controls['moy4'].value;
    if(F.controls['diploma'])
    this.diploma = F.controls['diploma'].value;
    this.level = F.controls['level'].value;
    this.speciality = F.controls['speciality'].value;
    this.day = F.controls['day'].value;
    this.hour = F.controls['hour'].value;

if(this.docBacDiplomaValid && this.docBacReleveValid && this.docReleve1Valid && this.docReleve2Valid && this.docBacReleve3Valid && this.docBacReleve4Valid && this.docCertificateValid && this.docDiplomaValid){
    this.loading = true;
      this.admisstionCandidacyService.addNewAdmissionCandidacy(this.bac,this.docBacDiploma,this.bacMoy,this.docBacReleve,this.bacYear,this.bacEstablishment,this.bacGovernorate,
         this.moy1,this.docReleve1,this.moy2,this.docReleve2,this.docCertificate,this.moy3,this.docReleve3,this.moy4,this.docReleve4,this.diploma,this.docDiploma,this.level,this.speciality,this.day,this.hour)
         .subscribe(
          
        data => {
  
          this.loading = false;
      }
         );
      }
    }
      onBacReleveSelect(event: any) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result !== null) {
            const base64String = reader.result.toString().split(',')[1];
            this.docBacDiplomaSrc = `data:image/jpeg;base64,${base64String}`;
        };
        }
        if(file){
          reader.readAsDataURL(file);
          this.docBacReleve = event.target.files[0];
        }
          this.docBacReleveValid = event.target.files != null && event.target.files.length > 0;
       }

       onBacDiplomaSelect(event: any) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result !== null) {
            const base64String = reader.result.toString().split(',')[1];
            this.docBacDiplomaSrc = `data:image/jpeg;base64,${base64String}`;
        };
        }
        if(file){
          reader.readAsDataURL(file);
          this.docBacDiploma = event.target.files[0];
        }
          this.docBacDiplomaValid = event.target.files != null && event.target.files.length > 0;
       }
       onReleve1Select(event: any) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result !== null) {
            const base64String = reader.result.toString().split(',')[1];
            this.docReleve1Src = `data:image/jpeg;base64,${base64String}`;
        };
        }
        if(file){
          reader.readAsDataURL(file);
          this.docReleve1 = event.target.files[0];
        }
          this.docReleve1Valid = event.target.files != null && event.target.files.length > 0;
      }

      onReleve2Select(event: any) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result !== null) {
            const base64String = reader.result.toString().split(',')[1];
            this.docReleve2Src = `data:image/jpeg;base64,${base64String}`;
        };
        }
        if(file){
          reader.readAsDataURL(file);
          this.docReleve2 = event.target.files[0];
        }
          this.docReleve2Valid = event.target.files != null && event.target.files.length > 0;
      }

      onReleve3Select(event: any) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result !== null) {
            const base64String = reader.result.toString().split(',')[1];
            this.docReleve3Src = `data:image/jpeg;base64,${base64String}`;
        };
        }
        if(file){
          reader.readAsDataURL(file);
          this.docReleve3 = event.target.files[0];
        }
          this.docBacReleve3Valid = event.target.files != null && event.target.files.length > 0;
      }

      onReleve4Select(event: any) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result !== null) {
            const base64String = reader.result.toString().split(',')[1];
            this.docReleve4Src = `data:image/jpeg;base64,${base64String}`;
        };
        }
        if(file){
          reader.readAsDataURL(file);
          this.docReleve4 = event.target.files[0];
        }
          this.docBacReleve4Valid = event.target.files != null && event.target.files.length > 0;
      }

      onCertificateSelect(event: any) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result !== null) {
            const base64String = reader.result.toString().split(',')[1];
            this.docCertificateSrc = `data:image/jpeg;base64,${base64String}`;
        };
        }
        if(file){
          reader.readAsDataURL(file);
          this.docCertificate = event.target.files[0];
        }
          this.docCertificateValid = event.target.files != null && event.target.files.length > 0;
      }

      onDiplomaSelect(event: any) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result !== null) {
            const base64String = reader.result.toString().split(',')[1];
            this.docDiplomaSrc = `data:image/jpeg;base64,${base64String}`;
        };
        }
        if(file){
          reader.readAsDataURL(file);
          this.docDiploma = event.target.files[0];
        }
          this.docDiplomaValid = event.target.files != null && event.target.files.length > 0;
      }
      updateHours() {
        this.interviewService.getHours(this.day1, 2).subscribe(hours => {
          this.hours = hours;
        });
}
}

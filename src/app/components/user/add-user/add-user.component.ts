import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
}
)
export class AddUserComponent {
  constructor(private userService:UserService ,private router: Router,private route: ActivatedRoute){}
  cin!:string;
  firstName!:string;
  lastName!:string;
  gender!:string;
  image?:File;
  address!:string;
  birthDate!:Date;
  phone!:string;
  mail!:string;
  password!:string;
  bacSection!:string;
  educationLevel!:string;
  speciality!:string;
  genders: string[] = ["Male", "Female"];
  bacSections: string[] = ["Math", "Science", "Technique", "Informatique"];
  educationLevels: string[] = ["Bac", "Bac+1", "Bac+2", "Bac+3", "Bac+4"];


  ngOnInit(): void {  
  }
  onImageSelect(event: any) {
    this.image = event.target.files[0];
  }
addUser(F:NgForm) {
  this.cin = F.controls['cin'].value;
  this.firstName = F.controls['firstName'].value;
  this.lastName = F.controls['lastName'].value;
  this.gender = F.controls['gender'].value;
  this.phone = F.controls['phone'].value;
  this.birthDate = new Date(F.controls['birthDate'].value);
  this.address = F.controls['address'].value;
  this.mail = F.controls['mail'].value;
  this.password = F.controls['password'].value;
  this.bacSection = F.controls['bacSection'].value;
  this.educationLevel = F.controls['educationLevel'].value;
  this.speciality = F.controls['speciality'].value;

  if (this.image instanceof File) {
    this.userService.addUser(this.cin, this.firstName, this.lastName, this.gender, this.image, this.birthDate, this.address, this.phone, this.mail, this.password, this.bacSection, this.educationLevel, this.speciality)
      .subscribe(
        data => {
          this.router.navigate(['/login']);
      }
      );
  } else {
    console.log('image is not a File or is undefined');
  }
 
}

}

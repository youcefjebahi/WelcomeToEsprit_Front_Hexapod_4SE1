import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  user!: User;
  role=this.authService.getRole();

  genders: string[] = ["Male", "Female"];
  bacSections: string[] = ["Math", "Science", "Technique", "Informatique"];
  educationLevels: string[] = ["Bac", "Bac+1", "Bac+2", "Bac+3", "Bac+4"];
  image?:File;
  
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute,private authService: AuthService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.userService.getUserById(id).subscribe(user => {
        this.user = user;
        console.log(user);
    });
  });
}

  onImageSelect(event: any) {
    this.image = event.target.files[0];
  }
  updateUser(F:NgForm) {

    if(F.controls['cin'].value)
    this.user.cin = F.controls['cin'].value;
    if (F.controls['firstName'].value)
    this.user.firstName = F.controls['firstName'].value;
    if(F.controls['lastName'].value)
    this.user.lastName = F.controls['lastName'].value;
    if(F.controls['gender'].value)
    this.user.gender = F.controls['gender'].value;
    if(F.controls['phone'].value)
    this.user.phone = F.controls['phone'].value;
    if(F.controls['birthDate'].value)
    this.user.birthDate = new Date(F.controls['birthDate'].value);
    if(F.controls['address'].value)
    this.user.address = F.controls['address'].value;
    if(F.controls['mail'].value)
    this.user.mail = F.controls['mail'].value;
    if(F.controls['password'].value)
    this.user.password = F.controls['password'].value;
    if(F.controls['bacSection'].value)
    this.user.bacSection = F.controls['bacSection'].value;
    if(F.controls['educationLevel'].value)
    this.user.educationLevel = F.controls['educationLevel'].value;
    if(F.controls['speciality'].value)
    this.user.speciality = F.controls['speciality'].value;
  
      this.userService.updateUser(this.user.id, this.user.cin, this.user.firstName, this.user.lastName, this.user.gender, this.image, this.user.birthDate,this.user.address, this.user.phone, this.user.mail, this.user.password,this.user.department, this.user.hiringDate, this.user.evaluator, this.user.jury, this.user.speaker, this.user.bacSection, this.user.educationLevel, this.user.speciality,this.user.classe, this.user.role.role)
        .subscribe(() => {
          if(this.role=='ADMIN')
          window.location.href = 'http://localhost:4200/admin';
          if(this.role!='ADMIN')
          window.location.href = 'http://localhost:4200/';
        });
   
  }

}

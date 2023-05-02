import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TestService } from 'src/app/services/test.service';
@Component({
  selector: 'app-getresult',
  templateUrl: './getresult.component.html',
  styleUrls: ['./getresult.component.css']
})
export class GetresultComponent {
  
  constructor(private testService: TestService, private authService: AuthService) { }


}

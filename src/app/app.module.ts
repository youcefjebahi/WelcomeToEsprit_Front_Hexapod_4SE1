import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './backOffice/header-admin/header-admin.component';
import { SideAdminComponent } from './backOffice/side-admin/side-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { FooterUserComponent } from './frontOffice/footer-user/footer-user.component';
import { HeaderUserComponent } from './frontOffice/header-user/header-user.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AddOfferComponent } from './components/offer/add-offer/add-offer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateOfferComponent } from './components/offer/update-offer/update-offer.component';
import { ShowOfferComponent } from './components/offer/show-offer/show-offer.component';
import { ListOffersComponent } from './components/offer/list-offers/list-offers.component';
import { LoginComponent } from './components/user/login/login.component';
import { TokenInterceptor } from './services/tokenInterceptor';
import { AddEventComponent } from './components/event/add-event/add-event.component';
import { ShowEventComponent } from './components/event/show-event/show-event.component';
import { UpdateEventComponent } from './components/event/update-event/update-event.component';
import { ListEventComponent } from './components/event/list-event/list-event.component';
import { DateFormatPipe } from './date-format.pipe';
import { InvitationSpeakerComponent } from './components/invitation/invitation-speaker/invitation-speaker.component';
import { AddOfferCandidacyComponent } from './components/offerCandidacy/add-offer-candidacy/add-offer-candidacy.component';
import { ShowOfferCandidacyComponent } from './components/offerCandidacy/show-offer-candidacy/show-offer-candidacy.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ShowInterviewComponent } from './components/interview/show-interview/show-interview.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import {AddQuestionComponent } from './components/question/add-question/add-question.component';
import { ListQuestionComponent } from './components/question/list-question/list-question.component';
import { ShowQuestionComponent } from './components/question/show-question/show-question.component';
import { AddTestComponent } from './components/test/addtest/addtest.component';
import { UpdatetestComponent } from './components/test/updatetest/updatetest.component';
import { ShowtestComponent } from './components/test/showtest/showtest.component';
import { ListtestComponent } from './components/test/listtest/listtest.component';

import { MatDialogModule } from '@angular/material/dialog';
import { AddadmissioncandidacyComponent } from './components/admissioncandidacy/addadmissioncandidacy/addadmissioncandidacy.component';
import { ListRoleComponent } from './components/role/list-role/list-role.component';
import { ShowUserComponent } from './components/user/show-user/show-user.component';
import { ShowInvitationByEventComponent } from './components/invitation/show-invitation-by-event/show-invitation-by-event.component';
import { AddRoomComponent } from './components/room/add-room/add-room.component';
import { ShowRoomComponent } from './components/room/show-room/show-room.component';
import { ListRoomsComponent } from './components/room/list-rooms/list-rooms.component';
import { UpdateRoomComponent } from './components/room/update-room/update-room.component';



@NgModule({
  declarations: [
    AppComponent,
    AllTemplateAdminComponent,
    BodyAdminComponent,
    FooterAdminComponent,
    HeaderAdminComponent,
    SideAdminComponent,
    AllTemplateUserComponent,
    BodyUserComponent,
    FooterUserComponent,
    HeaderUserComponent,
    AddOfferComponent,
    UpdateOfferComponent,
    ShowOfferComponent,
    ListOffersComponent,
    LoginComponent,
    AddEventComponent,
    ShowEventComponent,
    UpdateEventComponent,
    ListEventComponent,
    DateFormatPipe,
    InvitationSpeakerComponent,
    AddOfferCandidacyComponent,
    ShowOfferCandidacyComponent,
    ShowInterviewComponent,
    AddUserComponent,
    UpdateUserComponent,
    AddQuestionComponent,
    ListQuestionComponent,
    ShowQuestionComponent,
    AddTestComponent,
    UpdatetestComponent,
    ShowtestComponent,
    ListtestComponent,
    AddadmissioncandidacyComponent,

    ListRoleComponent,
    ShowUserComponent,
    ShowInvitationByEventComponent,
    AddRoomComponent,
    ShowRoomComponent,
    ListRoomsComponent,
    UpdateRoomComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxExtendedPdfViewerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule, 
   

  ],
  exports: [
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

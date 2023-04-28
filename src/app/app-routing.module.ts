import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { AddOfferComponent } from './components/offer/add-offer/add-offer.component';
import { UpdateOfferComponent } from './components/offer/update-offer/update-offer.component';
import { ShowOfferComponent } from './components/offer/show-offer/show-offer.component';
import { ListOffersComponent } from './components/offer/list-offers/list-offers.component';
import { LoginComponent } from './components/user/login/login.component';
import { AddEventComponent } from './components/event/add-event/add-event.component';
import { ListEventComponent } from './components/event/list-event/list-event.component';
import { UpdateEventComponent } from './components/event/update-event/update-event.component';
import { ShowEventComponent } from './components/event/show-event/show-event.component';
import { InvitationSpeakerComponent } from './components/invitation/invitation-speaker/invitation-speaker.component';
import { AddOfferCandidacyComponent } from './components/offerCandidacy/add-offer-candidacy/add-offer-candidacy.component';
import { ShowOfferCandidacyComponent } from './components/offerCandidacy/show-offer-candidacy/show-offer-candidacy.component';
import { ShowInterviewComponent } from './components/interview/show-interview/show-interview.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { ListRoleComponent } from './components/role/list-role/list-role.component';
import { ShowUserComponent } from './components/user/show-user/show-user.component';
import { ShowInvitationByEventComponent } from './components/invitation/show-invitation-by-event/show-invitation-by-event.component';

const routes: Routes = [
  {
    path:'admin',
    component:AllTemplateAdminComponent,
    children:[
      {
        path:'',
        component:BodyAdminComponent
      },
      {
        path:'offer/list',
        component:ListOffersComponent
      },
      {
        path:'offer/add',
        component:AddOfferComponent
      },
      {
        path:'offer/update/:id',
        component:UpdateOfferComponent
      },
      {
        path:'offer/show/:id',
        component:ShowOfferComponent
      },
      {
        path:'getEvents',
        component:ListEventComponent
      },
      {
        path:'addEvent',
        component:AddEventComponent
      },
      {
        path:'updateEvent/:id',
        component:UpdateEventComponent
      },
      {
        path:'showEvent/:id',
        component:ShowEventComponent
      },
      {
        path:'invitationSpeaker/:id',
        component:InvitationSpeakerComponent
        
      },
      {
        path:'showInvitations/:id',
        component:ShowInvitationByEventComponent
        
      },
  
      {
        path:'offerCandidacy/show/:id',
        component:ShowOfferCandidacyComponent
      },
      {
        path:'user/update/:id',
        component:UpdateUserComponent
      },
      {
        path:'interview/show/:id',
        component:ShowInterviewComponent
      },
      {
        path:'role/list',
        component:ListRoleComponent
      },
      {
        path:'user/show/:id',
        component:ShowUserComponent
      }
    ]
  },





  
  {
    path:'',
    component:AllTemplateUserComponent,
    children:[
      {
        path:'',
        component:BodyUserComponent
      },
      {
        path:'offer/list',
        component:ListOffersComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      
      {
        path:'user/add',
        component:AddUserComponent
      },
      {
        path:'offerCandidacy/add/:id',
        component:AddOfferCandidacyComponent
      },
      {
        path:'offerCandidacy/show/:id',
        component:ShowOfferCandidacyComponent
      },
      {
        path:'interview/show/:id',
        component:ShowInterviewComponent
      },
      {
        path:'user/update/:id',
        component:UpdateUserComponent
      },
      {
        path:'user/show/:id',
        component:ShowUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

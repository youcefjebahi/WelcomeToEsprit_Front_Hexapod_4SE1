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
import { InvitationStudentsComponent } from './components/invitation/invitation-students/invitation-students.component';

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
        path:'offer',
        component:ListOffersComponent
      },
      {
        path:'add',
        component:AddOfferComponent
      },
      {
        path:'update/:id',
        component:UpdateOfferComponent
      },
      {
        path:'show/:id',
        component:ShowOfferComponent
      },
      {
        path:'login',
        component:LoginComponent
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
        path:'updateEvent',
        component:UpdateEventComponent
      },
      {
        path:'showEvent',
        component:ShowEventComponent
      },
      {
        path:'invitionSpeaker',
        component:InvitationSpeakerComponent
      },
      {
        path:'invitaionStudents',
        component:InvitationStudentsComponent
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
        path:'offer',
        component:ListOffersComponent
      },
      {
        path:'add',
        component:AddOfferComponent
      },
      {
        path:'update/:id',
        component:UpdateOfferComponent
      },
      {
        path:'show/:id',
        component:ShowOfferComponent
      },
      {
        path:'login',
        component:LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

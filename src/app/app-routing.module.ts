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
import { ListPostComponent } from './components/post/list-post/list-post.component';
import { PostadmComponent } from './components/post/postadm/postadm.component';

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
        path:'post',
        component:PostadmComponent
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
        path:'post',
        component:ListPostComponent
        
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

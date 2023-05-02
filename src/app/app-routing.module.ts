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
import { AdsManagementComponent } from './backOffice/ads-management/ads-management.component';
import { CreateAdComponent } from './backOffice/create-ad/create-ad.component';
import { FAQComponent } from './backOffice/faq/faq.component';
import { FAQComponentFront } from './frontOffice/faq/faq.component';
import { CreateFAQComponent } from './backOffice/create-faq/create-faq.component';
import { CampainsComponent } from './backOffice/campains/campains.component';
import { CreateCampainComponent } from './backOffice/create-campain/create-campain.component';
import { ShowadComponent } from './backOffice/showad/showad.component';
import { ShowcampaignComponent } from './backOffice/showcampaign/showcampaign.component';

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
        path:'ads',
        component:AdsManagementComponent,
      }, 
      {
        path:'ads/updatead/:id',
        component:CreateAdComponent,
      },  
      {
        path:'ads/show/:id',
        component:ShowadComponent,
      },  
      {
        path:'ads/createad',
        component:CreateAdComponent
      },
      {
        path:'faq',
        component:FAQComponent,
      }, 
      {
        path:'faq/createfaq',
        component:CreateFAQComponent
      },
      {
        path:'faq/updatefaq/:id',
        component:CreateFAQComponent
      },
      {
        path:'campaigns',
        component:CampainsComponent,
      }, 
      {
        path:'campaigns/createcampaign',
        component:CreateCampainComponent
      },
      {
        path:'campaigns/updatecampaign/:id',
        component:CreateCampainComponent
      },
      {
        path:'campaigns/show/:id',
        component:ShowcampaignComponent
      },
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
      // {
      //   path:'offer',
      //   component:ListOffersComponent
      // },
      // {
      //   path:'add',
      //   component:AddOfferComponent
      // },
      // {
      //   path:'update/:id',
      //   component:UpdateOfferComponent
      // },
      // {
      //   path:'show/:id',
      //   component:ShowOfferComponent
      // },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'faq',
        component:FAQComponentFront,
      }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

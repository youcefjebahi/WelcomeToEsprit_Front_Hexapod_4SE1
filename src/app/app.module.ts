import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { FormGroup, FormsModule } from '@angular/forms';
import { UpdateOfferComponent } from './components/offer/update-offer/update-offer.component';
import { ShowOfferComponent } from './components/offer/show-offer/show-offer.component';
import { ListOffersComponent } from './components/offer/list-offers/list-offers.component';
import { LoginComponent } from './components/user/login/login.component';
import { TokenInterceptor } from './services/tokenInterceptor';
import { AdsComponent } from './components/ads/ads.component';
import { AdsBannerComponent } from './components/ads-banner/ads-banner.component';
import { AdsManagementComponent } from './backOffice/ads-management/ads-management.component';
import { CreateAdComponent } from './backOffice/create-ad/create-ad.component';
import { FAQComponentFront } from './frontOffice/faq/faq.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { CreateFAQComponent } from './backOffice/create-faq/create-faq.component';
import { CampainsComponent } from './backOffice/campains/campains.component';
import { CreateCampainComponent } from './backOffice/create-campain/create-campain.component';
import { CommonModule } from '@angular/common';
import { FAQComponent } from './backOffice/faq/faq.component';
import { ShowadComponent } from './backOffice/showad/showad.component';
import { ShowcampaignComponent } from './backOffice/showcampaign/showcampaign.component';

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
    AdsComponent,
    AdsBannerComponent,
    AdsManagementComponent,
    CreateAdComponent,
    FAQComponentFront,
    CreateFAQComponent,
    CampainsComponent,
    CreateCampainComponent,
    FAQComponent,
    ShowadComponent,
    ShowcampaignComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

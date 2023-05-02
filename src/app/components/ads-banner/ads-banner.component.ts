import { Component } from '@angular/core';
import { AdsService } from 'src/app/services/ads.service';
import { interval } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-ads-banner',
  templateUrl: './ads-banner.component.html',
  styleUrls: ['./ads-banner.component.css']
})
export class AdsBannerComponent {
  constructor(
    private adService: AdsService,
    private cookieService : CookieService
  ) { 
  }
  item = 0
  Ads: any;

  lengthInt = 0

  obs$ = interval(10000)

  ngOnInit( ) { 
    this.getAds();
  } 

 

  getAds() {
    this.adService.getAds().subscribe(res => {
      this.Ads = res;
      console.log('aaaaaaaaa' , this.Ads)
      this.Ads = this.Ads.filter((i:any)=>{
        return i.typeads == "V"
      })
      this.Ads = this.Ads.sort((a:any,b:any)=>{
        return b.cost - a.cost
      })
      if(!localStorage.getItem('tag'))
      this.adService.addVue(this.Ads[this.item].id).subscribe(res=>{
        console.log(res)
      })
      

      this.obs$.subscribe((d)=>{
        console.log('ameeeeeeni' , this.item)
        

        if(this.item == this.Ads.length-1 ){
          this.item = 0
        }else{
          this.item = this.item + 1
          if(this.lengthInt < this.Ads.length-1 ){
            if(!localStorage.getItem('tag')){
              this.adService.addVue(this.Ads[this.item].id).subscribe(res=>{
                this.lengthInt = this.lengthInt +1
                console.log(res)
              })
            }
          }else{
            localStorage.setItem('tag' , 'tag')
          }

        }
      })

      
      console.log('adsss' , this.Ads)
      console.log(this.Ads[0]);
      
    },
      error => {

      }
    )
  }
}

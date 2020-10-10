import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';
import { KontentService } from './kontent.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class AppResolveService implements Resolve<any> {

  type:any;
  id: any; 

  constructor(public kontentService:KontentService) {

   }

  resolve(route: ActivatedRouteSnapshot){
    let currentPathType = route.routeConfig.path
    let that = this; 


    if ( currentPathType == '') {
      this.type = 'page_home';

    }else if (currentPathType =='about-pogo-lt') {
      this.type = 'page_about';
      
    } else if(currentPathType == 'download-pogo-lt') {
      this.type = 'page_download';
      
    }
    else if(currentPathType == 'support') {
      this.type = 'page_support';
      
    } else if(currentPathType == 'privacy-policy') {
      this.id = 'privacy_policy';

    } else if(currentPathType == 'licenses') {
      this.id = 'app_privacy_policy';
    }


    if(this.type) {

      return  this.kontentService.deliveryClient.items()
      .type(this.type)
      .depthParameter(6)
      .toPromise()
      .then(response => {
        that.type = null
        return response.items[0]
      })  
    }  

    if(this.id) {
      return  this.kontentService.deliveryClient.item(this.id)
      .depthParameter(6)
      .toPromise()
      .then(response => {
          that.id = null 
          console.log(response.item); 
          return response.item
        })  
    }  

  }
}

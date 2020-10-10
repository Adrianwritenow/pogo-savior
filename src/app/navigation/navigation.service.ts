import { Injectable } from '@angular/core';
import {KontentService} from '../kontent.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService{

	constructor(public kontentService: KontentService) {

	}


	  getPrimaryLinks() {

		var processNavigationItems = function(pNavItem) {

			var processedItem = {
					title: null, 
					url: null, 
					pageContent: null,
					component: null,
					handle: null
			}; 

			
			processedItem.title = pNavItem.title.value.toLowerCase(); 
			processedItem.url = pNavItem.url.value; 
			processedItem.pageContent = pNavItem.page_content.value[0]; 
			processedItem.component = pNavItem.angular_component.value; 

			if(pNavItem.title.value.toLowerCase() === 'download') {
				processedItem.handle = pNavItem.title.value.toLowerCase() + '.registration'; 
			} else {
				processedItem.handle = pNavItem.title.value.toLowerCase(); 
			}

			return processedItem;

		}


		let kontent = this.kontentService.deliveryClient.item("root_navigation_item")
												.depthParameter(6)
												.toPromise()
												.then(response => {
													var navItems = response.item.subitems.value; 
													var processedItems = []; 

													for(var i = 0; i < navItems.length; i++) {
														processedItems.push(processNavigationItems(navItems[i]))
													}

													return processedItems; 

												}).catch(err => {
													console.log('err is:',err)
												})

		return kontent;

												
		
	}
		}

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

// import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  links: void | any[];
  route: object; 
  isDownloadPage: boolean; 

	// constructor(private navigationService:NavigationService, private router:Router) {
  //   this.navigationService.getPrimaryLinks().then((response) => {
  //  		this.links = response; 
  	// })
constructor(){}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

    //
    // Listo to events in router to checkif downlad route currently. 
    //
  //   this.router.events.subscribe(event => {
  //     if(event instanceof NavigationEnd) {
  //       const url = event.urlAfterRedirects;
  //       if(url === '/download-pogo-lt') {
  //       	this.isDownloadPage = true; 
  //       } else {
  //         this.isDownloadPage = false; 
  //       }

  //     }
  //   })
	// }  ngOnInit(): any {

 
  // }

}
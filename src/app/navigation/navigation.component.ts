import { Component, OnInit } from '@angular/core';

import { NavigationService } from './navigation.service';

@Component({
  selector: 'navigation-component',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  links: void | any[];

	constructor(private navigationService: NavigationService) {


}

  ngOnInit(): any {
    this.navigationService.getPrimaryLinks().then((response) => {
      this.links = response; 
     })
    }

 
}

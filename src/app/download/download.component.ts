import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { ActivatedRoute } from '@angular/router';
import { ContentItem } from '@kentico/kontent-delivery';
import { SeoService } from '../seo.service';

@Component({
  selector: 'download',
  templateUrl: './download.component.html',
 

})
export class DownloadComponent implements OnInit {

  transitioned: boolean;
  pageContent:any;
  @Input()registered: boolean = false;
  @Input() show: boolean = true;




  constructor(private route: ActivatedRoute, private seoService:SeoService) { }

  ngOnInit() {
    this.route.data.forEach((data:{pageContent:ContentItem[]}) =>{
      this.pageContent = data.pageContent   
      this.seoService.setPageSeo(this.pageContent)
     
    })
}



 grandmaHandleClick(event) {
  this.show = false;


  setTimeout(() => {
    this.registered =true;
    this.show = false;

    setTimeout(() => {
      this.show = true;

      
    }, 10);
  }, 290);


}


}

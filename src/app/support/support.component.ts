import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ContentItem } from '@kentico/kontent-delivery';
import { SeoService } from './../seo.service';

@Component({
  selector: 'support',
  templateUrl: './support.component.html',
})
export class SupportComponent implements OnInit {

  pageContent:any;
  isWindows7:false;

  constructor(private route: ActivatedRoute, private seoService:SeoService ) { }
  
  ngOnInit() {
      this.route.data.forEach((data:{pageContent:ContentItem[]}) =>{
        this.pageContent = data.pageContent  
        this.seoService.setPageSeo(this.pageContent)
      })
  }

}

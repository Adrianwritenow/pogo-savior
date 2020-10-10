import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ContentItem } from '@kentico/kontent-delivery';
import { SeoService } from './../seo.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
pageContent:any;

constructor(private route: ActivatedRoute, private seoService:SeoService ) { }

ngOnInit() {
    this.route.data.forEach((data:{pageContent:ContentItem[]}) =>{
      this.pageContent = data.pageContent   
      this.seoService.setPageSeo(this.pageContent)


    })
}


}

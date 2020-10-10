import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ContentItem } from '@kentico/kontent-delivery';
import { SeoService } from './../seo.service';

@Component({
  selector: 'pages.default',
  templateUrl: './default-page.html',
})
export class DefaultPageComponent implements OnInit {

  pageContent: any;

  constructor(private route: ActivatedRoute, private router:Router, public seoService:SeoService ) { }

  ngOnInit() {

    const that = this; 

      this.route.data.forEach((data:{pageContent:ContentItem[]}) =>{
        this.pageContent = data.pageContent   
        this.seoService.setPageSeo(this.pageContent)
      })

  }
}

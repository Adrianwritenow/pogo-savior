import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ContentItem } from '@kentico/kontent-delivery';
import { Meta } from '@angular/platform-browser';
import { SeoService } from './../seo.service';

@Component({
  selector: 'pages.home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  pageContent: any;
  aboveFoldLoaded: boolean; 

  constructor(private route: ActivatedRoute, private router:Router, public seoService:SeoService ) { }

  ngOnInit() {

    const that = this; 

      this.route.data.forEach((data:{pageContent:ContentItem[]}) =>{
        this.pageContent = data.pageContent   
        this.seoService.setPageSeo(this.pageContent)
      })

      setTimeout(function() {
        that.aboveFoldLoaded = true; 
      }, 300); 
  }
}

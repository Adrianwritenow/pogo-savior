import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ContentItem } from '@kentico/kontent-delivery';
import { SeoService } from '../seo.service';

@Component({
  selector: 'loading-screen',
  templateUrl: './loading-screen.component.html',

})
export class LoadinScreenComponent implements OnInit {

  registered: boolean;
  pageContent:any;


  constructor(private route: ActivatedRoute, private seoService:SeoService) { }

  ngOnInit() {

}





}

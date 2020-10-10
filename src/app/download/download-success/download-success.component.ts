import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ContentItem } from '@kentico/kontent-delivery';

@Component({
  selector: 'download-success',
  templateUrl: './download-success.component.html',


})
export class DownloadSuccessComponent implements OnInit {
  pageContent:any;


  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.route.data.forEach((data:{pageContent:ContentItem[]}) =>{
      this.pageContent = data.pageContent   
      
    })
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ContentItem } from '@kentico/kontent-delivery';

@Component({
  selector: 'download-regestration',
  templateUrl: './download-regestration.component.html'
})

export class DownloadRegestrationComponent implements OnInit {
  pageContent:any;
  
  constructor(  private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.data.forEach((data:{pageContent:ContentItem[]}) =>{
      this.pageContent = data.pageContent   

    })
  }
 
  @Output() notifyGrandParent= new EventEmitter();
  
  childEvent(event) {
    this.notifyGrandParent.emit('event')
  }


}

import {
  Directive,
  ElementRef,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[auto-download]'
})
export class AutoDownloadDirective implements OnInit {

  constructor(private element: ElementRef, ) {}
  ngOnInit() {
    var $link = this.element.nativeElement;
    setTimeout(function () {
      import(/*webpackChunkName: "jquery" */ "jquery").then(({default: $}) => {
              
        // window.jQuery = $;
        // window.$ = $;

        window.location.href = $($link).attr('href');
      });

    }, 500);
  }

}

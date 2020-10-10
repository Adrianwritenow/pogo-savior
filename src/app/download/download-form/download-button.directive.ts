import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';

import {
  ControlContainer
} from '@angular/forms';

@Directive({
  selector: '[download-button]'
})
export class DownloadButtonDirective implements OnInit, OnChanges {
  @Input() public state: any;

  button = this.element.nativeElement;
  progressbar = '[data-ui-component="progress-bar"]';


  constructor(private element: ElementRef, private readonly form: ControlContainer) {

  }
  ngOnInit() {
    import(/*webpackChunkName: "jquery" */ "jquery") .then(({default: $}) => {

    // window.jQuery = $;
    // window.$ = $;

    $(this.button).removeClass('is-in-progress');
    $(this.button).removeClass('is-succesful');
  
    });
    

  }

  ngOnChanges(changes) {
    import(/*webpackChunkName: "jquery" */ "jquery") .then(({default: $}) => {

      // window.jQuery = $;
      // window.$ = $;

      if (this.state === 'untouched') {

        $(this.button).removeClass('is-in-progress');
        $(this.button).removeClass('is-succesful');

      }

      if (this.state === 'in-progress') {


        $(this.button).addClass('is-in-progress');
        
        $($(this.progressbar)[0]).animate({
          width: '100%',
          ease: 'ease-in-out'
        }, 1000);
      }

      if (this.state === 'success') {
        $(this.button).removeClass('is-in-progress');
        $(this.button).addClass('is-successful');
        $(this.button).attr('aria-disabled', 'false');
      }

      if (this.state === 'error') {
        $(this.progressbar).animate({
          width: 0,
          ease: 'ease-in-out'
        }, 500);
        $(this.button).removeClass('is-in-progress');
        $(this.button).removeClass('is-successful');
      }

    });

  }





  @HostListener('window:keyup', ['$event']) checkBoxOnEnter(event: KeyboardEvent, ) {
    import(/*webpackChunkName: "jquery" */ "jquery") .then(({default: $}) => {

    
    let checkbox = $('input:checkbox');
    let target = $(event.target);
    event.preventDefault();
    if ((target.attr('type') == checkbox.attr('type')) && event.keyCode == 13) {
      import(/*webpackChunkName: "jquery" */ "jquery") .then(({default: $}) => {

      //  window.jQuery = $;
      // window.$ = $;

      $(checkbox).trigger('click');
      });
    }
  });
    
  }



}

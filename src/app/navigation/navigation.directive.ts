import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit
} from '@angular/core';
import { Router, Routes } from '@angular/router';

import { element } from 'protractor';

@Directive({
  selector: '[navigation-directive]'
})
export class NavigationDirective {
   public navIsOpen:boolean =false;

   
   public selectors:any = {
    headerNavToggle: '[data-ui-component="header-nav-toggle"]',
    headerNav: '[data-ui-component="header-nav"]',
    headerLogo: '[data-ui-component="header-logo"]',
    header: 'header',
    headerContainer: '.header-container',
    heroHeader: '[data-ui-component="hero-header"]'
  }

 


  constructor(private element: ElementRef, private router: Router) {
  this.element = element;

  }

  closeNav(nav) {
    nav.removeClass('is-open');
    nav.addClass('is-closed');
    
   };

    openNav(nav) {
    console.log('OPENM')

    nav.removeClass('is-closed');
    nav.addClass('is-open');
};

  @HostListener('click', ['$event']) toggleNav($event) {
    import(/*webpackChunkName: "jquery" */ "jquery") .then(({default: $}) => {

        // window.jQuery = $;
        // window.$ = $;

        let $navToggle  = this.selectors.headerNavToggle;
        let $navigation  = $(this.selectors.header);
        let $body  = $('body');
        let $navLink  = $navigation.find('a');
        let $header  = $(this.selectors.header);
        let $headerContainer  = $header.parent(this.selectors.headerContainer);
        let $heroHeader  = this.selectors.heroHeader;
        let $window  = $(window);
       
    	if (!this.navIsOpen) {
    		this.openNav($navigation);
        this.navIsOpen = true;
        $($navToggle).addClass('is-active')
    	  } else {
    		this.closeNav($navigation);
        this.navIsOpen = false;
        $($navToggle).removeClass('is-active')
    	  }

        
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        this.router.events.subscribe((val) => {
            this.closeNav($navigation); 
            this.navIsOpen = false;
            $($navToggle).removeClass('is-active');	
            
             document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
      });
  }
  

  @HostListener('window:scroll') onWindowScroll(){
                import(/*webpackChunkName: "jquery" */ "jquery").then(({default: $}) => {

        // window.jQuery = $;
        // window.$ = $;

                  let $header  = $(this.selectors.header);
                  let $headerContainer  = $header.parent(this.selectors.headerContainer);
                  let $heroHeader  = this.selectors.heroHeader;

    
        const scrollLength = 10000; 

          function throttle(fn, wait) {
            var time = Date.now();
            return function() {
              if ((time + wait - Date.now()) < 0) {
                fn();
                time = Date.now();
              }
            }
          }
      
          function callback(heroHeader,$headerContainer) {

      
            var scrollTop = $(window).scrollTop();


            var elementHeight = ($(heroHeader).height() - 60); 

      
            if(scrollTop > elementHeight) {
              $headerContainer.removeClass('is-hidden');
              $headerContainer.addClass('is-fixed');
      
              $headerContainer.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
              }); 
            }
      
            if(scrollTop < elementHeight && $headerContainer.hasClass('is-fixed')) {
              $headerContainer.addClass('is-hidden');
      
              $headerContainer.one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
                $headerContainer.removeClass('is-fixed');
                $headerContainer.removeClass('is-hidden');
              }); 
            }
      
          }
          throttle(callback($heroHeader, $headerContainer), 10);

        });

        }

}

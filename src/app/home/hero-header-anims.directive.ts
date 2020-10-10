import { Directive, HostListener, OnInit } from '@angular/core';

import { AnimationConfigWithData } from 'lottie-web';

@Directive({
  selector: '[hero-header-anims]'
})
export class HeroHeaderAnimsDirective implements OnInit{

  constructor() { 
}
  ngOnInit() {

     
  //   import(/*webpackChunkName: "jquery" */ "jquery").then(({default: $}) => {

  //     window.jQuery = $;
  //     window.$ = $;
      
  //     let animation= null; 
  //     const	breakpoint= null; 
  //     const	properties: AnimationConfigWithData= {
  //              container: document.getElementById('hero-header-anim'),
  //              renderer: 'svg',
  //              loop: true,
  //              autoplay: true,
  //              animationData:{},
  //              rendererSettings: {
  //                progressiveLoad: true
  //              }
  //      } 
     
   
  //     function loadAnimJSON (pWindowWidth) {
   
  //      if(pWindowWidth < 768) {
  //        return $.getJSON('/assets/hero-header-anim-small.json')
  //          .then(function(data) {
  //            this.breakpoint = 'small'
  //            return data; 
  //          })
  //      }
   
  //      if(pWindowWidth <= 961 && pWindowWidth > 767) {
   
  //        return $.getJSON('/assets/hero-header-anim-medium.json')
  //          .then(function(data) {
  //            this.breakpoint = 'medium'
  //            return data; 
  //          })			
  //      }
   
  //      if(pWindowWidth > 961) {
  //        return $.getJSON('/assets/hero-header-anim-large.json')
  //          .then(function(data) {
  //            this.breakpoint = 'large'
  //            return data; 
  //          })			
  //      }
   
  //    }
   
  //    function initWindow (pWindowWidth){
   
  //      const that = this; 
               
  //      import(/*webpackChunkName: "lottie" */ "lottie-web").then(({default: lottie}) => {
  //        //
  //        //TO DO FIX resize not working. This setup isnt an object like before, so there's no .init() event
  //        //
  //        if(animation) {
  //          animation.destroy(); 
  //        }
   
  //        loadAnimJSON(pWindowWidth).then(function(data) {
  //           properties.animationData = data; 
  //           animation = lottie.loadAnimation(properties);
  //           animation.setSpeed(.8);
   
  //           $(window).on('resize', function() {
  //             // clearTimeout(window.resizedFinished); 
  //             $('#hero-header-anim').css('display', 'none'); 
  //             // window.resizedFinished = setTimeout(function() {
  //             // 	that.init(window.innerWidth)
  //               $('#hero-header-anim').css('display', 'block'); 
  //             // }, 200); 
  //           });
   
  //        })
  //      });
  //    }
   
  //    initWindow(window.innerWidth); 
  //  });


  }



  @HostListener('window:resize', ['$event'])
    onResize(event) {
    console.log('RESIZE');

      
    }

}




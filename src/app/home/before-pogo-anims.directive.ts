import { Directive, OnInit } from '@angular/core';

import { AnimationConfigWithData } from 'lottie-web';

@Directive({
  selector: '[before-pogo-anims]'
})
export class BeforePogoAnimsDirective implements OnInit{
  

  constructor() {}
  ngOnInit() {

  // setTimeout(function() {

  //   import(/*webpackChunkName: "lottie" */ 'lottie-web').then(({default: lottie})=> { 
  //     import(/*webpackChunkName: "animation.gsap" */ 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js').then(({default: animationGsap})=>{
  //       import(/*webpackChunkName: "ScrollMagic" */ 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js').then(({default: ScrollMagic})=>{
  //         import(/*webpackChunkName: "TimelineMax" */ 'gsap/src/minified/TimelineMax.min.js').then(({default: TimelineMax})=>{
  //           import(/*webpackChunkName: "TimelineMax" */ 'gsap/src/minified/TweenMax.min.js').then(({default: TweenMax})=>{
  //               import(/*webpackChunkName: "jquery" */ "jquery").then(({default: $}) => {


  //             // window.jQuery = $;
  //             // window.$ = $;

  //       function initAnimations(pJSONData) {

  
  
  //         const controller = new ScrollMagic.Controller({});
  
  //         const selectors = {
  //           needs: '[data-ui-component="needs"]',
  //           needsCopy: '[data-ui-component="needs-copy"]',
  //           need: '[data-ui-component="need"]',
  //           needImages: '[data-ui-component="need-images"]',
  //           timeline: '[data-ui-component="timeline"]',
  //           counterButtons: '[data-ui-component="counter-button"]'
  //         };
  
  //           const $need = $(selectors.need);
  //           const $needImages = $(selectors.needImages); 
  
  //           $needImages.addClass('is-animated');
  
  //           const phoneLoggerAnimData = pJSONData[0]; 
  //           const varoReportAnimData = pJSONData[1]; 
  //           const emailAnimData  = pJSONData[2];
  //           const varoReportsAnimData = pJSONData[3];
  //           const laptopAnimData = pJSONData[4];
  
  
  //          const phoneLoggerAnimProps: AnimationConfigWithData= {
  //             container: document.getElementById('phone-logger-anim'),
  //             renderer: 'svg',
  //             loop: false,
  //             autoplay: false,
  //             animationData: phoneLoggerAnimData,
  //              rendererSettings: {
  //                 progressiveLoad: true
  //              }
  //           }; 
  
  //          const phoneLoggerLottieAnim = lottie.loadAnimation(phoneLoggerAnimProps);
  //          phoneLoggerLottieAnim.setSpeed(1.1);
  
  //          const varoReportAnimProps:AnimationConfigWithData = {
  //           container: document.getElementById('varo-report-anim'),
  //           renderer: 'svg',
  //           loop: false,
  //           autoplay: false,
  //           animationData: varoReportAnimData,
  //            rendererSettings: {
  //               progressiveLoad: true
  //            }
  //         }; 
  
  //          const varoReportLottieAnim = lottie.loadAnimation(varoReportAnimProps);
      
  //          const emailAnimProps:AnimationConfigWithData = {
  //             container: document.getElementById('email-anim'),
  //             renderer: 'svg',
  //             loop: false,
  //             autoplay: false,
  //             animationData: emailAnimData,
  //              rendererSettings: {
  //                 progressiveLoad: true
  //              }
  //           }; 
  
  //          const emailLottieAnim = lottie.loadAnimation(emailAnimProps);
  //           emailLottieAnim.setSpeed(1.2);
  
  
  //          const varoReportsAnimProps:AnimationConfigWithData = {
  //             container: document.getElementById('varo-reports-anim'),
  //             renderer: 'svg',
  //             loop: false,
  //             autoplay: false,
  //             animationData: varoReportsAnimData,
  //              rendererSettings: {
  //                 progressiveLoad: true
  //              }
  //           }; 
  
  
  //           const varoReportsLottieAnim = lottie.loadAnimation(varoReportsAnimProps);
  //           const varoReportsTimeline = new TimelineMax();
  
  //           varoReportsTimeline.to({frame: 0}, 1, {
  //             frame: varoReportsLottieAnim.totalFrames -1, 
  //             onUpdate: function() {
  //               varoReportsLottieAnim.goToAndStop((Math.round(this.progress() * 79)), true)
  //             }, 
  //             // ease: Linear.easeNone
  //           });
  
  //           var varoReportsLottieScene = new ScrollMagic.Scene(
  //             {triggerElement: '#email-anim', 
  //             triggerHook: 0.35, 
  //              duration: $(selectors.needImages).find('#varo-reports-anim').height()})
  //             .setTween(varoReportsTimeline)
  //             .addTo(controller);
  
  
  //          const laptopAnimProps:AnimationConfigWithData = {
  //             container: document.getElementById('laptop-anim'),
  //             renderer: 'svg',
  //             loop: false,
  //             autoplay: false,
  //             animationData: laptopAnimData,
  //              rendererSettings: {
  //                 progressiveLoad: true
  //              }
  //           }; 
  
  //          const laptopLottieAnim = lottie.loadAnimation(laptopAnimProps);
  //           laptopLottieAnim.setSpeed(1.5);
  
  
  
  
  //           var masterTimeLineTween = new TimelineMax()
  //             .call(function() {
  //               phoneLoggerLottieAnim.play(); 
  //              })
  //             .to("[data-id='loggers']", .1, {css: {className: "+=is-checked"}})
  //             .fromTo(selectors.timeline, .8, 
  //             {height: 0}, 
  //             {height: '46%'}, "-=0.1")
  //             .fromTo('[data-ui-component="varo-doc-travel-line"]', 0.1, 
  //             {opacity: 0}, 
  //             {opacity: 1}, "-=0.7")
  //             .fromTo('[data-ui-component="varo-doc"]', 0.1, 
  //             {opacity: 0}, 
  //             {opacity: 1}, "-=0.6")
  //             .fromTo('[data-ui-component="varo-doc"]', .6, 
  //             {y: 0},
  //             {y: 230}, "-=0.6")
  
  //             .to("[data-id='email']", .1, {css: {className: "+=is-checked"}}, "-=0.1")
  //             .call(function() {
  //               emailLottieAnim.play(); 
  //              },[], null,'-=0.1')
  //             .to(selectors.timeline, .7, 
  //             {height: '94%'}, ">")
  //             .fromTo('[data-ui-component="varo-docs-travel-line"]', 0.1, 
  //             {opacity: 0}, 
  //             {opacity: 1}, "-=0.7")
  //             .fromTo('[data-ui-component="varo-docs"]', .1, 
  //             {opacity: 0}, 
  //             {opacity: 1}, "-=0.6")
  //             .fromTo('[data-ui-component="varo-docs"]', .6, 
  //             {y: 0},
  //             {y: 244}, "-=0.6")
  //             .to("[data-id='windows']", .1, {css: {className: "+=is-checked"}}, "-=0.18")
  //             .call(function() {
  //               laptopLottieAnim.play(); 
  //             },[], null,'-=.18')
  
  //           var scene = new ScrollMagic.Scene(
  //             {triggerElement: selectors.needImages, 
  //              triggerHook: 0.6, 
  //              duration: $(selectors.needImages).height() })
  //             .setTween(masterTimeLineTween)
  //             .addTo(controller);
  
  
  //           var needsAnimation =  new ScrollMagic.Scene({
  //             triggerElement: selectors.needs, 
  //             duration: $(selectors.needImages).height() - $(selectors.needImages).height()/3.2,
  //             triggerHook: 0.2,
  //           }).setPin(selectors.needsCopy).addTo(controller); 
  
  
  //           function setupButtons() {
  //             const $counterButtons = $(selectors.counterButtons); 
  //             $counterButtons.each(function(index) {
  
  //               $(this).one('click focus', function(event) {
  //                   event.preventDefault();
  
  //                   var that = this; 
  
  //                   $('html, body').stop().animate({
  //                       scrollTop: $("#" + $(that).data('id')).offset().top - 300
  //                   }, 800, 'linear');
  //                 }); 
  //               })
  //           }
            
  //           setupButtons()


            

  //         }

  //     function loadAnimJSON() {

  //       var requests = [
  //         require('../../assets/phone-logger-anim.json'),
  //         require('../../assets/varo-report-anim.json'),
  //         require('../../assets/email-anim.json'),
  //         require('../../assets/varo-reports-anim.json'),
  //         require('../../assets/laptop-anim.json'),
  //       ]; 
    
  
  //       $.when.apply($, requests).done(function() {
  //         var jsonData = [];
         
  //         initAnimations(requests);
  //       });
  
  //     }
    
    
    
  //     if(window.innerWidth > 767) {
  //           loadAnimJSON(); 
  //     } else {
  //       return ;
  //     }
  
  //         }); 
  //         }); 
  //       }); 
  //     }); 
  //     });
  //   });
  // }, 200); 
 }
}




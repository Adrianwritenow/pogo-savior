import { Directive, OnInit } from '@angular/core';

import { AnimationConfigWithData } from 'lottie-web';

@Directive({
  selector: '[home-explaining-anims]'
})
export class HomeExplaningAnimsDirective implements OnInit{

  constructor() { }
  ngOnInit() {
    
    // setTimeout(function() {

    //   import(/*webpackChunkName: "ScrollMagic" */ 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js').then(({default: ScrollMagic})=>{
    //    import(/*webpackChunkName: "lottie" */ 'lottie-web').then(({default: lottie})=> { 
    //     import(/*webpackChunkName: "animation.gsap" */ 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js').then(({default: animationGsap})=>{
    //       import(/*webpackChunkName: "TimelineMax" */ 'gsap/src/minified/TimelineMax.min.js').then(({default: TimelineMax})=>{
    //         import(/*webpackChunkName: "TweenMax" */ "gsap/src/minified/TweenMax.min.js").then(({default: TweenMax}) => {
    //           import(/*webpackChunkName: "jquery" */ "jquery").then(({default: $}) => {
          
    //           window.jQuery = $;
    //           window.$ = $;

    //          function initAnimations(pJSONdata) {

    //            const selectors = {
    //              varoBreezeAnimContainer: 'varo-breeze',
    //              varoBreezeTrigger: '[data-ui-component="varo-breeze-scene"]',
    //              visibleColdChainAnimContainer: 'visible-cold-chain',
    //              visibleColdChainTrigger: '[data-ui-component="visible-cold-chain-scene"]',
    //              performanceRecordsAnimContainer: 'performance-records',
    //              performanceRecordsTrigger: '[data-ui-component="performance-records-scene"]',
    //              privacyFreeAnimContainer: 'privacy-free',
    //              privacyFreeTrigger: '[data-ui-component="privacy-free"]'
    //            }

    //            const varoBreezeAnimData = pJSONdata[0]; 
    //            const visibleColdChainAnimData = pJSONdata[1]; 
    //            const performanceRecordsAnimData = pJSONdata[2]; 
    //            const privacyFreeAnimData = pJSONdata[3]; 


    //            const scrollController = new ScrollMagic.Controller({});


    //              const varoBreeze: AnimationConfigWithData =  {
    //                container: document.getElementById(selectors.varoBreezeAnimContainer),
    //                renderer: 'svg',
    //                loop: false,
    //                autoplay: false,
    //                animationData: varoBreezeAnimData,
    //                 rendererSettings: {
    //                    progressiveLoad: true
    //                 }
    //              };
    //              const visibleColdChain: AnimationConfigWithData =  {
    //                container: document.getElementById(selectors.visibleColdChainAnimContainer),
    //                renderer: 'svg',
    //                loop: true,
    //                autoplay: false,
    //                animationData: visibleColdChainAnimData,
    //                 rendererSettings: {
    //                    progressiveLoad: true
    //                 }
    //              };
    //              const performanceRecords: AnimationConfigWithData =  {
    //                container: document.getElementById(selectors.performanceRecordsAnimContainer),
    //                renderer: 'svg',
    //                loop: false,
    //                autoplay: false,
    //                animationData: performanceRecordsAnimData,
    //                 rendererSettings: {
    //                    progressiveLoad: true
    //                 }
    //              };
    //              const privacyFree: AnimationConfigWithData = {
    //                container: document.getElementById(selectors.privacyFreeAnimContainer),
    //                renderer: 'svg',
    //                loop: false,
    //                autoplay: false,
    //                animationData: privacyFreeAnimData,
    //                 rendererSettings: {
    //                    progressiveLoad: true
    //                 }
    //              }
               


    //            const varoBreezeAnimation = lottie.loadAnimation(varoBreeze);
    //                  varoBreezeAnimation.setSpeed(.8);

    //            const visibleColdChainAnimation = lottie.loadAnimation(visibleColdChain);
    //                  visibleColdChainAnimation.setSpeed(.9);
                     
    //            const performanceRecordsAnimation = lottie.loadAnimation(performanceRecords);
    //                  performanceRecordsAnimation.setSpeed(.9);

    //            const privacyFreeAnimation = lottie.loadAnimation(privacyFree);
    //                  privacyFreeAnimation.setSpeed(3); 

    //            var varoBreezeScene = new ScrollMagic.Scene(
    //              {triggerElement: selectors.varoBreezeTrigger, 
    //               triggerHook: 0.5 })
    //              .on("enter", function() {
    //                varoBreezeAnimation.play(); 
    //              })
    //              .addTo(scrollController);



    //            var visibleColdChainScene = new ScrollMagic.Scene(
    //              {triggerElement: selectors.visibleColdChainTrigger, 
    //               triggerHook: .6 })
    //              .on("enter", function() {
    //                visibleColdChainAnimation.play(); 
    //              })
    //              .addTo(scrollController);

    //            var performanceRecordsScene = new ScrollMagic.Scene(
    //              {triggerElement: selectors.performanceRecordsTrigger, 
    //               triggerHook: .6 })
    //              .on("enter", function() {
    //                performanceRecordsAnimation.playSegments([0, 100], true) 
    //              })
    //              .addTo(scrollController);

    //            var privacyFreeScene = new ScrollMagic.Scene(
    //              {triggerElement: selectors.privacyFreeTrigger, 
    //               triggerHook: .6})
    //              .on("enter", function() {
    //                var dir = 1; 
    //                privacyFreeAnimation.play(); 
    //                privacyFreeAnimation.addEventListener("complete", function() {
    //                  dir = dir * -1;
    //                  privacyFreeAnimation.setDirection(this.dir);
    //                  privacyFreeAnimation.play(); 
    //                })
    //              })
    //              .addTo(scrollController);

    //          }

    //          function loadAnimJSON() {

    //            var requests = []; 

    //            requests.push($.getJSON('../../assets/varo-a-breeze.json'));
    //            requests.push($.getJSON('../../assets/visible-cold-chain.json'));
    //            requests.push($.getJSON('../../assets/peformance-records.json'));
    //            requests.push($.getJSON('../../assets/privacy-free.json'));

    //            $.when.apply($, requests).done(function() {
    //              var jsonData = [];
    //              for(var i = 0, len = arguments.length; i < len; i++){
    //                jsonData.push(arguments[i][0]);
    //              }
    //              initAnimations(jsonData);
    //            });
    //          }

    //          if(window.innerWidth > 767) {
    //              loadAnimJSON(); 
    //          } else {
    //            return 
    //          }


    //         }); 
    //         }); 
    //       }); 
    //      }); 
    //    }); 
    //   }); 

    // }, 400); 

   }
  }

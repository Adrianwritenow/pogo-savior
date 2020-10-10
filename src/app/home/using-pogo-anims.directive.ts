import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[using-pogo-anims]'
})
export class UsingPogoAnimsDirective implements OnInit{

  constructor() { 
  }

  ngOnInit() {
    const selectors = {
      steps: "[data-ui-component='using-pogo-steps']",
      step: "[data-ui-component='using-pogo-step']",
      stepsCopy: "[data-ui-component='using-pogo-steps-copy']",
      stepsImages: "[data-ui-component='steps-images']",
      usingPogo: "[data-ui-component='using-pogo']",
      timeline: "[data-ui-component='using-pogo-timeline']",
      downloadStepImage: "[data-ui-component='download-step-image']",
      gmailStepImage: "[data-ui-component='gmail-step-image']",
      loginStepImage: "[data-ui-component='login-step-image']",
      exportStepImage: "[data-ui-component='export-step-image']",
      counterButtons: "[data-ui-component='counter-buttons-using-pogo']"
    }
    
    const animationDuration = '180%'; 


		function initDesktop() {

      import(/*webpackChunkName: "ScrollMagic" */ 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js').then(({default: ScrollMagic})=>{
        import(/*webpackChunkName: "animation.gsap" */ 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js').then(({default: animationGsap})=>{
          import(/*webpackChunkName: "TimelineMax" */ 'gsap/src/minified/TimelineMax.min.js').then(({default: TimelineMax})=>{
            import(/*webpackChunkName: "TweenMax" */ "gsap/src/minified/TweenMax.min.js").then(({default: TweenMax}) => {
							import(/*webpackChunkName: "jquery" */ "jquery").then(({default: $}) => {

            //   window.jQuery = $;
            //   window.$ = $;

						const controller = new ScrollMagic.Controller({});

						// const $need = $(selectors.need);

						var stepsAnimation =  new ScrollMagic.Scene({
							triggerElement: selectors.usingPogo, 
							duration: animationDuration,
							triggerHook: 0.15,
						}).setPin(selectors.usingPogo).addTo(controller); 

						var timelineTween = new TimelineMax()
						  .to("[data-step='download']", 1, {css: {className: "+=is-checked"}})
						  .to(selectors.downloadStepImage, 1, {css: {className: "+=is-active"}}, '-=1')
							.fromTo(selectors.timeline, 2, 
							{height: 0}, 
							{height: '25%'}, '-=0.4')
							.to("[data-step='gmail']", 1, {css: {className: "+=is-checked"}}, '-=0.4')
						  .to(selectors.downloadStepImage, 1, {css: {className: "-=is-active"}}, '-=1')
						  .to(selectors.gmailStepImage, 1, {css: {className: "+=is-active"}}, '-=1')
							.to(selectors.timeline, 2, 
							{height: '75%'})
							.to("[data-step='login']", 1, {css: {className: "+=is-checked"}}, '-=1')
						  .to(selectors.gmailStepImage, 1, {css: {className: "-=is-active"}}, '-=1')
						  .to(selectors.loginStepImage, 1, {css: {className: "+=is-active"}}, '-=1')
							.to(selectors.timeline, 2, 
							{height: '98%'})
							.to("[data-step='export']", 1, {css: {className: "+=is-checked"}}, '-=0.4')
						  .to(selectors.loginStepImage, 1, {css: {className: "-=is-active"}}, '-=1')
						  .to(selectors.exportStepImage, 1, {css: {className: "+=is-active"}}, '-=1')


						var scene = new ScrollMagic.Scene(
							{triggerElement: selectors.usingPogo, 
							 triggerHook: 0.15, 
							 duration: animationDuration})
							.setTween(timelineTween)
							.addTo(controller);


						function setupButtons() {
								const $counterButtons = $(selectors.counterButtons); 
								$counterButtons.each(function(index) {

									$(this).one('click focus', function(event) {
											event.preventDefault();

											var that = this; 
											var step = $(that).data('id'); 

											if(step === 0) {
												timelineTween.seek(2)
											}


											if(step === 1) {
												timelineTween.seek(3)
											}


											if(step === 2) {
												timelineTween.seek(4.5)
											}


											if(step === 3) {
												timelineTween.seek(6.9)
											}


										}); 
									})
							}
							
							setupButtons()
							}); 
						}); 

		     		}); 
          }); 
        }); 

      }
        
   function initMobile() {

			import(/*webpackChunkName: "Swiper" */ "swiper").then(({default: Swiper}) => {
				import(/*webpackChunkName: "jquery" */ "jquery").then(({default: $}) => {

				var $slideshow = $(selectors.steps); 
				var $slides = $(selectors.step);

				$slideshow.addClass('swiper-container');
				$slides.wrapAll("<div class='swiper-wrapper'/>");
				$slides.addClass('swiper-slide'); 


				var swiperComponents = '<div class="swiper-pagination"></div> <div class="swiper-button-prev"></div> <div class="swiper-button-next"></div>'

				$slideshow.append(swiperComponents); 

				var usingPogoSlideshow = new Swiper(selectors.steps, {
					direction: 'horizontal',
					slidesPerView: 1,
					autoHeight: true,
				  navigation: {
				    nextEl: '.swiper-button-next',
				    prevEl: '.swiper-button-prev'
				  },
					pagination: {
				    el: '.swiper-pagination',
				    type: 'bullets',
				    clickable: true
				  }
				});


				}); 
			}); 
		}

		setTimeout(function() {
	    if(window.innerWidth > 960) {
				initDesktop();
	    } else {
	      initMobile(); 
	    }
		}, 600); 
  }
  
}

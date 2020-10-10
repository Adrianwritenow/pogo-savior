import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[faq-questions-dir]'
})
export class FaqQuestionsDirective {

   selectors = {
    faqQuestions: '[data-ui-component="faq-question"]'
  }

  constructor(element:ElementRef) {
  }
    
@HostListener('click',['$event', '$event.target']) initFaqQuestions(event: any){

  event.preventDefault();
  import(/*webpackChunkName: "jquery" */ "jquery").then(({default: $}) => {

  // window.jQuery = $;
  // window.$ = $;
  
  let question =$(event.target).closest('[data-ui-component="faq-question"]');
  const $faqQuestions = $(this.selectors.faqQuestions);
  let answer = question.find('[data-ui-component="faq-answer"]');
  let id = question.data('question-id');


  function closeOtherQuestions(pId) {


      $faqQuestions.each((index,element)=>{
        const answer =$(element).find('[data-ui-component="faq-answer"]');
        const id = $(element).data('question-id');

        if ($(element).hasClass('is-active') && pId !== id) {
        

          $(element).removeClass('is-active');
          $(element).children().closest('a').attr('aria-expanded', 'false');
          $(answer).slideToggle({
            ease: 'ease-in-out'
            }); 
        }else{
          return;
        }
      })
    }

    closeOtherQuestions(id);

    $(question[0]).toggleClass('is-active'); 

    $(question[0]).children().closest('a').attr('aria-expanded', function (i, attr) {
     return attr == 'true' ? 'false' : 'true'
    });

    $(answer[0]).slideToggle({
    ease: 'ease-in-out'
    }); 

});

  }
}


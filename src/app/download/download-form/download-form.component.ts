import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { ContentItem } from '@kentico/kontent-delivery';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'download-form',
  templateUrl: './download-form.component.html',
})
export class DownloadFormComponent implements OnInit {
  pageContent:any;
  countries:any;
  buttonText:any;
  registerForm:{};



  form = new FormGroup({
    firstName: new FormControl('',[Validators.required,]),
    lastName: new FormControl('',[Validators.required,]),
    email: new FormControl('',[Validators.required, Validators.email]),
    organization:new FormControl('',Validators.required),
    country:new FormControl('',Validators.required),
    gdpr:new FormControl('',Validators.required),
  })

  registrationState = {
    'untouched': true, 
    'inProgress': false,
    'success': false,
    'error': false
  }

  

  constructor(private route: ActivatedRoute, private http:HttpClient) { 

  }


  ngOnInit() {
    this.route.data.forEach((data:{pageContent:ContentItem[]}) =>{
      this.pageContent = data.pageContent   
      this.countries = require('./countries.json');
      this.buttonText = 
      {
        normal:this.pageContent.downloadBtnNormal.value,
        progress: this.pageContent.downloadBtnProgress.value

      }
    })
}

@Output() handleClick = new EventEmitter


 
 getRegistrationState() {
  if(this.registrationState.untouched = true 
      && !this.registrationState.inProgress
      && !this.registrationState.success 
      && !this.registrationState.error) {
        
      return 'untouched';
  }

  if(!this.registrationState.untouched  
      && this.registrationState.inProgress
      && !this.registrationState.success ) {

        return 'in-progress';

  }

  if(!this.registrationState.untouched 
      && this.registrationState.inProgress
      && this.registrationState.success) {

        return 'success';

  }

  if(this.registrationState.error) {

    return 'error';

  }

}



@HostListener('keyup')setValidation() {

  if(this.form.valid) {
    document.querySelectorAll('.download-form__button')[0].setAttribute('aria-disabled', 'false'); 
  } else {
    document.querySelectorAll('.download-form__button')[0].setAttribute('aria-disabled', 'true'); 
  }
};


registerUser(){
  if(this.form.valid) {
    this.registrationState.untouched = false; 
    this.registrationState.inProgress = true; 
    console.log('FORM VALUE',JSON.stringify(this.form.value))

    this.http.post<any>('/api/sign-up-user', this.form.value, { responseType: 'text' as 'json' }).subscribe({
      next: data=> setTimeout(() => {
                        setTimeout(() => {
                          console.log('INNER')
                          this.registrationState.success = true; 
                          this.handleClick.emit('notified')
                        }, 1200); 
        
      }, 1100),
      
      error: error => setTimeout(() => {
        console.log('ERROR',error)
        this.registrationState.inProgress = false; 
        this.registrationState.error = true; 
      }, 1000)
    })

  
  
  }
}

get firstName(){
  return this.form.get('firstName');

}

get lastName(){
  return this.form.get('lastName');

}
get email(){
  return this.form.get('email');

  
}
get organization(){
  return this.form.get('organization');

  
}
get country(){
  return this.form.get('country');
}

get gdpr(){
  return this.form.get('gdpr');
}


}

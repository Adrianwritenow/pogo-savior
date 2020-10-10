import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { ContentItem } from '@kentico/kontent-delivery';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'support-form',
  templateUrl: './support-form.component.html',
})
export class SupportFormComponent implements OnInit {

  pageContent:any;

  form = new FormGroup({
    fullName: new FormControl('',[Validators.required,]),
    email: new FormControl('',[Validators.required, Validators.email]),
    supportTopic:new FormControl('',Validators.required),
    message:new FormControl('',Validators.required),
  })

  @Input() supportFormStates = {
    succesful: false, 
    error: false 
  }


  constructor(private route: ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
    this.route.data.forEach((data:{pageContent:ContentItem[]}) =>{
      this.pageContent = data.pageContent   
      console.log(this.pageContent)

    })
  }


  get fullName(){
    return this.form.get('fullName');

    
  }
  get email(){
    return this.form.get('email');

    
  }
  get supportTopic(){
    return this.form.get('supportTopic');

    
  }
  get message(){
    return this.form.get('message');
  }

  sendMessage() {

      this.http.post<any>('/api/send-support-ticket', this.form.value).subscribe({

        next: data=> setTimeout(() => {
          this.supportFormStates.succesful = true;
        }, 200),

        error: error => setTimeout(() => { 
          this.supportFormStates.error = true;
        }, 200),

    })    
  };

}

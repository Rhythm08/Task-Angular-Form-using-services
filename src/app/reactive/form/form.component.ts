import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { GetServiceService } from 'src/app/server/get-service.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  StudentForm = new FormGroup({
    first: new FormControl('', Validators.required), 
    last: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),
    });
    
  constructor(private val:GetServiceService){}
    get first(){
      return this.StudentForm.get('first');
    }
    get last(){
      return this.StudentForm.get('last');
    }
    get email(){
      return this.StudentForm.get('email');
    }
    get city(){
      return this.StudentForm.get('city');
    }
    get state(){
      return this.StudentForm.get('state');
    }
    get zip(){
      return this.StudentForm.get('zip');
    }
    updateInfo(){
        this.val.addinfo(this.StudentForm.value);
    }
  
}

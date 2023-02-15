import { Component } from '@angular/core';
import { GetServiceService } from 'src/app/server/get-service.service';
@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css'],
})
export class FormDataComponent {

  arr:any[] = [];
  constructor(private val:GetServiceService){
  //  this.arr =this.val.result
    
    
  }
  sol(){
   this.arr =this.val.result
  console.log("Hello",this.arr);
  }
  showTable = false;
    sub(){
      this.showTable = !this.showTable;
      console.log(this.arr);
    }
    delete(t:any){
      this.arr.splice(t,1);
    }
    
}

import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  info :any[] = [];

  
  @Input() result= this.info;
  constructor() { }
  addinfo(inc :any){
      this.info.push({...inc});
      console.log(this.info);
  }

}

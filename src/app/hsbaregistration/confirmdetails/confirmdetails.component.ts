import { EnterdetailsComponent } from './../enterdetails/enterdetails.component';
import { Component, OnInit, Input } from '@angular/core';
import { IpoService } from 'src/app/shared/ipo.service';


@Component({
  selector: 'confirmdetails',
  templateUrl: './confirmdetails.component.html',
  //template: `{{ fromenterData }}`,
  styleUrls: ['./confirmdetails.component.css']
})
export class ConfirmdetailsComponent implements OnInit {
  private dd;
  
 
  //@Input() fromenterData; 

  constructor(private ipoService: IpoService) { }

  ngOnInit() {
    this.dd = this.ipoService.getMyData();
    console.log(this.dd);
  }

  

  // load() {
  //   const data = this.ipoService.getMyData();
  //   console.log(data);
  // }

}

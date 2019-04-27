import { Component, OnInit,  EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IpoService } from 'src/app/shared/ipo.service';

@Component({
  selector: 'enterdetails',
  templateUrl: './enterdetails.component.html',
  styleUrls: ['./enterdetails.component.css']
})
export class EnterdetailsComponent implements OnInit {
  private registrationData = {};

  //@Output() enterData = new EventEmitter();


  constructor(private router: Router, private ipoService: IpoService) { }

  ngOnInit() {
  }

  onSubmit(formData){
   this.registrationData = {
    dpId: formData.value.dpid,
    clientId: formData.value.clientid,
    pan: formData.value.pan,
    investorName: formData.value.investorName,
    email: formData.value.email,
    mob: formData.value.mobile
   }
  //  console.log(this.registrationData);
   this.router.navigate(['/confirmdetails']);

   this.ipoService.storedata(this.registrationData);

   //this.enterData.emit(this.registrationData);

  }


}

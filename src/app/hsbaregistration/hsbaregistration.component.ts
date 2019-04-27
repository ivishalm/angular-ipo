import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hsbaregistration',
  templateUrl: './hsbaregistration.component.html',
  styleUrls: ['./hsbaregistration.component.css']
})
export class HsbaregistrationComponent implements OnInit {

   registrationData = {};


  display(data) {
    this.registrationData = data;
    console.log(this.registrationData);

}

  constructor() { }

  ngOnInit() {
  }

}

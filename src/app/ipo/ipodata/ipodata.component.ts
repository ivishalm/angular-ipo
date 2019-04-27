import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/shared/ipo.service';
// import { IPODataModel } from '../../model/ipointerface';

// @Component({

//   selector: 'app-ipodata',
//   templateUrl: './ipodata.component.html',
//   styleUrls: ['./ipodata.component.css']
// })
export class IpodataComponent implements OnInit {
  // ipoData: IPODataModel[] = [];
  // ipodebtData: IPODataModel[] = [];


  constructor(private ipoService: IpoService) { }


  ngOnInit() {
    // this.ipoService.getIPOData()
    //   .subscribe(data => {
    //     this.ipoData = data;
    //     console.log(this.ipoData);
    //   });

      // this.ipoService.getDebtIPOData()
      //   .subscribe(res => {
      //     this.ipodebtData = res;
      //     console.log(this.ipodebtData);
      //   });

  }

}

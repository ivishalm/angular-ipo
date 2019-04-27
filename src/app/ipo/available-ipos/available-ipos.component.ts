import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/shared/ipo.service';
import { IPODataModel } from '../../model/ipointerface';

@Component({
  selector: 'available-ipos',
  templateUrl: './available-ipos.component.html',
  styleUrls: ['./available-ipos.component.css']
})
export class AvailableIposComponent implements OnInit {

  // ipoData: IPOData[] = [];
  // debtIpoData: IPOData[] = [];
  // dataSource: any[];




  // displayedColumns: string[] = ['name', 'type', 'lotsize', 'minprice', 'maxprice', 'enddate', 'action'];
  // displayedDebtColumns: string[] = ['debtname', 'debtminlot', 'debtmarketlot', 'debtfacevalue', 'debtprice', 'debtenddate', 'debtaction'];

  constructor(private ipoService: IpoService) {}

  ngOnInit() {
    // this.ipoService.getIPOData()
    //   .subscribe(data => {
    //     this.ipoData = data.ipo_data;
    //     console.log(this.ipoData);
    //     this.dataSource = this.ipoData;
    //   });

      // this.ipoService.getDebtIPOData()
      //   .subscribe(res => {
      //     this.debtIpoData = res.debtipo_data;
      //     console.log(this.debtIpoData);
      //     this.dataSource = this.debtIpoData;
      //   });
  }


  // length = 100;
  //  pageSize = 10;
  //  pageSizeOptions: number[] = [5, 10, 25, 100];
  //  // MatPaginator Output
  //  pageEvent: PageEvent;
  //  setPageSizeOptions(setPageSizeOptionsInput: string) {
  //    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  //  }




}

import { IPODataModel } from './../../../model/ipointerface';
import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/shared/ipo.service';
// import {PageEvent} from '@angular/material';

@Component({
  selector: 'debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit {

  res: any;
  debtData: IPODataModel[] = [];
  dataSource: any[];
  displayedColumns: string[] = ['debtname', 'debtminlot', 'debtmarketlot', 'debtfacevalue', 'debtprice', 'debtenddate', 'debtaction'];


  constructor(private ipoService: IpoService) { }

  ngOnInit() {
    this.ipoService.getDebtIPOData()
      .subscribe(res => {
        this.debtData = res;
        console.log(this.debtData);
        this.dataSource = this.debtData;
      });
  }


}

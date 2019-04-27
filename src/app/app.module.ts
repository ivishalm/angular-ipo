import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithdrawEnquiryComponent } from './withdraw-enquiry/withdraw-enquiry.component';
import { InvestorDetailsComponent } from './withdraw-enquiry/investor-details/investor-details.component';
import { BidDetailsComponent } from './withdraw-enquiry/bid-details/bid-details.component';
import { CapitalIndiaFinanceComponent } from './withdraw-enquiry/capital-india-finance/capital-india-finance.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IpoComponent } from './ipo/ipo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { IpodataComponent } from './ipo/ipodata/ipodata.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { IpoService } from './shared/ipo.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AvailableIposComponent } from './ipo/available-ipos/available-ipos.component';
import { AppliedIposComponent } from './ipo/applied-ipos/applied-ipos.component';
import { ServicesComponent } from './ipo/services/services.component';

import { EquityComponent } from './ipo/available-ipos/equity/equity.component';
import { DebtComponent } from './ipo/available-ipos/debt/debt.component';
import { HsbaregistrationComponent } from './hsbaregistration/hsbaregistration.component';
import { EnterdetailsComponent } from './hsbaregistration/enterdetails/enterdetails.component';

import { ConfirmdetailsComponent } from './hsbaregistration/confirmdetails/confirmdetails.component';
import { EnterotpComponent } from './hsbaregistration/enterotp/enterotp.component';
import { ReceiptComponent } from './hsbaregistration/receipt/receipt.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    WithdrawEnquiryComponent,
    InvestorDetailsComponent,
    BidDetailsComponent,
    CapitalIndiaFinanceComponent,
    NavBarComponent,
    IpoComponent,
    SidebarComponent,
    // IpodataComponent,
    HomeComponent,
    LoginComponent,
    AvailableIposComponent,
    AppliedIposComponent,
    ServicesComponent,
    EquityComponent,
    DebtComponent,
    HsbaregistrationComponent,
    EnterdetailsComponent,
    ConfirmdetailsComponent,
    EnterotpComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
    

  ],
  providers: [
    IpoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

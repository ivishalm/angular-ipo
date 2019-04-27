import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IpoComponent } from './ipo/ipo.component';
// import { IpodataComponent } from './ipo/ipodata/ipodata.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './ipo/services/services.component';
import { HsbaregistrationComponent } from './hsbaregistration/hsbaregistration.component';
import { EnterdetailsComponent } from './hsbaregistration/enterdetails/enterdetails.component';
import { ConfirmdetailsComponent } from './hsbaregistration/confirmdetails/confirmdetails.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'ipo', component: IpoComponent},
  // { path: 'ipodata', component: IpodataComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'hsbaregistration', component: HsbaregistrationComponent },
  { path: 'enterdetails', component: EnterdetailsComponent },
  { path: 'confirmdetails', component: ConfirmdetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

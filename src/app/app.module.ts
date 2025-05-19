import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemMasterComponent } from './home/item-master/item-master.component';
import { GrnComponent } from './home/grn/grn.component';
import { InvoiceComponent } from './home/invoice/invoice.component';
import { CreditSettleComponent } from './home/credit-settle/credit-settle.component';
import { PaymentComponent } from './home/payment/payment.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './home/staff/staff.component';
import { CustomerComponent } from './home/customer/customer.component';
import { SupplierComponent } from './home/supplier/supplier.component';
import { ReportsComponent } from './home/reports/reports.component';
import { LockComponent } from './home/lock/lock.component';
import { CalculatorComponent } from './home/calculator/calculator.component';
import { PriceUpdateComponent } from './home/price-update/price-update.component';
import { OrderComponent } from './home/order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemMasterComponent,
    GrnComponent,
    InvoiceComponent,
    CreditSettleComponent,
    PaymentComponent,
    HomeComponent,
    StaffComponent,
    CustomerComponent,
    SupplierComponent,
    ReportsComponent,
    LockComponent,
    CalculatorComponent,
    PriceUpdateComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

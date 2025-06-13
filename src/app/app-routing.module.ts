import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {InvoiceComponent} from './home/invoice/invoice.component';
import {ItemMasterComponent} from './home/item-master/item-master.component';
import {PriceUpdateComponent} from './home/price-update/price-update.component';
import {GrnComponent} from './home/grn/grn.component';
import {CreditSettleComponent} from './home/credit-settle/credit-settle.component';
import {PaymentComponent} from './home/payment/payment.component';
import {StaffComponent} from './home/staff/staff.component';
import {CustomerComponent} from './home/customer/customer.component';
import {SupplierComponent} from './home/supplier/supplier.component';
import {ReportsComponent} from './home/reports/reports.component';
import {LockComponent} from './home/lock/lock.component';
import {CalculatorComponent} from './home/calculator/calculator.component';
import {MasterDetailsComponent} from './home/item-master/master-details/master-details.component';
import {ItemSearchComponent} from './home/item-master/item-search/item-search.component';
import {PictureComponent} from './home/item-master/picture/picture.component';
import {OrderComponent} from './home/order/order.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home/invoice'
      },
      {
        path: 'invoice',
        component: InvoiceComponent
      },
      {
        path: 'item-master',
        component: ItemMasterComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: '/home/item-master/master-details'
          },
          {
            path: 'master-details',
            component: MasterDetailsComponent
          },
          {
            path: 'item-search',
            component: ItemSearchComponent
          },
          {
            path: 'picture',
            component: PictureComponent
          }
        ]
      },
      {
        path: 'price-update',
        component: PriceUpdateComponent
      },
      {
        path: 'grn',
        component: GrnComponent
      },
      {
        path: 'credit-settle',
        component: CreditSettleComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      },
      {
        path: 'staff',
        component: StaffComponent
      },
      {
        path: 'customer',
        component: CustomerComponent
      },
      {
        path: 'supplier',
        component: SupplierComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'lock',
        component: LockComponent
      },
      {
        path: 'calculator',
        component: CalculatorComponent
      },
      {
        path: 'order',
        component: OrderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

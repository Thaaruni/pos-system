import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  template: `
    <div>
      <div>
        <li class="p-2 rounded cursor-pointer hover:bg-gray-200 hover:text-black active:bg-gray-400 active:text-white" routerLink="invoice" routerLinkActive="bg-gray-300 text-black">Invoice</li>
        <li class="p-2 rounded cursor-pointer hover:bg-gray-200 hover:text-black active:bg-gray-400 active:text-white" routerLink="item-master" routerLinkActive="bg-gray-300 text-black">item-master</li>
        <li class="p-2 rounded cursor-pointer hover:bg-gray-200 hover:text-black active:bg-gray-400 active:text-white" routerLink="price-update" routerLinkActive="bg-gray-300 text-black">price-update</li>
        <li class="p-2 rounded cursor-pointer hover:bg-gray-200 hover:text-black active:bg-gray-400 active:text-white" routerLink="grn" routerLinkActive="bg-gray-300 text-black">grn</li>
        <li class="p-2 rounded cursor-pointer hover:bg-gray-200 hover:text-black active:bg-gray-400 active:text-white" routerLink="credit-settle" routerLinkActive="bg-gray-300 text-black">credit-settle</li>
        <li class="p-2 rounded cursor-pointer hover:bg-gray-200 hover:text-black active:bg-gray-400 active:text-white" routerLink="payment" routerLinkActive="bg-gray-300 text-black">payment</li>
        <li class="p-2 rounded cursor-pointer hover:bg-gray-200 hover:text-black active:bg-gray-400 active:text-white" routerLink="staff" routerLinkActive="bg-gray-300 text-black">staff</li>
        <li class="p-2 rounded cursor-pointer hover:bg-gray-200 hover:text-black active:bg-gray-400 active:text-white" routerLink="customer" routerLinkActive="bg-gray-300 text-black">customer</li>
        <li class="p-2 rounded cursor-pointer hover:bg-gray-200 hover:text-black active:bg-gray-400 active:text-white" routerLink="supplier" routerLinkActive="bg-gray-300 text-black">supplier</li>
        <li class="p-2 rounded cursor-pointer hover:bg-gray-200 hover:text-black active:bg-gray-400 active:text-white" routerLink="reports" routerLinkActive="bg-gray-300 text-black">reports</li>
        <li class="p-2 rounded cursor-pointer hover:bg-gray-200 hover:text-black active:bg-gray-400 active:text-white" routerLink="lock" routerLinkActive="bg-gray-300 text-black">lock</li>
        <li class="p-2 rounded cursor-pointer hover:bg-gray-200 hover:text-black active:bg-gray-400 active:text-white" routerLink="calculator" routerLinkActive="bg-gray-300 text-black">calculator</li>
        <li class="p-2 rounded cursor-pointer hover:bg-gray-200 hover:text-black active:bg-gray-400 active:text-white" routerLink="order" routerLinkActive="bg-gray-300 text-black">Order</li>
      </div>
      <div>
        <router-outlet/>
      </div>
    </div>

  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

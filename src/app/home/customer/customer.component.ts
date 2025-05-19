import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: false,
  template: `
    <div class="p-4 space-y-4 bg-gray-100 min-h-screen">
      <div class="text-xl font-bold text-gray-800">Customer</div>

      <fieldset class="border border-gray-400 p-2 rounded space-y-3">


        <div class="space-y-4">

          <div class="grid grid-cols-6 gap-4 items-center">
            <label class="col-span-1 text-sm font-medium text-gray-700">
              Customer Name<span class="text-red-500">*</span>
            </label>
            <input type="text" class="col-span-2 px-2 py-1 border border-gray-300 rounded"/>

            <label class="col-span-1 text-sm font-medium text-gray-700">Customer Group</label>
            <select class="col-span-2 px-2 py-1 border border-gray-300 rounded">
              <option value="">--None--</option>
            </select>
          </div>


          <div class="grid grid-cols-6 gap-4 items-center">
            <label class="col-span-1 text-sm font-medium text-gray-700">
              Customer Code
            </label>
            <input type="text" class="col-span-2 px-2 py-1 border border-gray-300 rounded"/>

            <label class="col-span-1 text-sm font-medium text-gray-700">Category 1</label>
            <select class="col-span-2 px-2 py-1 border border-gray-300 rounded">
              <option value="">--None--</option>
            </select>
          </div>

        </div>

        <fieldset class="border border-gray-400 p-2 rounded space-y-3">

          <div class="flex border-b border-gray-300 space-x-4 bold">
            <button
              [ngClass]="{
               'text-blue-600 border-blue-600 font-bold': isActive('Master Detail'),
               'text-gray-600 border-transparent font-bold': !isActive('Master Detail')
               }"
              class="pb-2 text-lg hover:text-blue-600 hover:border-blue-600 border-b-2"
              [routerLink]="'Master Detail'">
              Master Detail
            </button>
          </div>


          <div class="grid grid-cols-10 gap-4 items-center">
            <label class="col-span-1 text-sm font-medium text-gray-700">
              Contact Person
            </label>
            <input type="text" class="col-span-4 px-2 py-1 border border-gray-300 rounded"/>

            <label class="col-span-1 text-sm font-medium text-gray-700">
              NIC No
            </label>
            <input type="text" class="col-span-4 px-2 py-1 border border-gray-300 rounded"/>
          </div>


          <div class="grid grid-cols-10 gap-4 items-center">
            <label class="col-span-1 text-sm font-medium text-gray-700">
              Address [Line 1]
            </label>
            <input type="text" class="col-span-4 px-2 py-1 border border-gray-300 rounded"/>
          </div>

          <div class="grid grid-cols-10 gap-4 items-center">
            <label class="col-span-1 text-sm font-medium text-gray-700">
              Address [Line 2]
            </label>
            <input type="text" class="col-span-4 px-2 py-1 border border-gray-300 rounded"/>
          </div>

          <div class="grid grid-cols-10 gap-4 items-center">
            <label class="col-span-1 text-sm font-medium text-gray-700">
              Address [Line 3]
            </label>
            <input type="text" class="col-span-4 px-2 py-1 border border-gray-300 rounded"/>
          </div>

          <div class="grid grid-cols-10 gap-4 items-center">
            <label class="col-span-1 text-sm font-medium text-gray-700">
              City
            </label>
            <input type="text" class="col-span-4 px-2 py-1 border border-gray-300 rounded"/>
          </div>

          <div class="grid grid-cols-10 gap-4 items-center">
            <label class="col-span-1 text-sm font-medium text-gray-700">
              Contact No [Mobile]
            </label>
            <input type="text" class="col-span-4 px-2 py-1 border border-gray-300 rounded"/>

            <label class="col-span-1 text-sm font-medium text-gray-700">
              Contact No [Other]
            </label>
            <input type="text" class="col-span-4 px-2 py-1 border border-gray-300 rounded"/>
          </div>

          <div class="grid grid-cols-10 gap-4 items-center">
            <label class="col-span-1 text-sm font-medium text-gray-700">
              Fax No
            </label>
            <input type="text" class="col-span-4 px-2 py-1 border border-gray-300 rounded"/>

            <label class="col-span-1 text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input type="text" class="col-span-4 px-2 py-1 border border-gray-300 rounded"/>
          </div>

          <div class="grid grid-cols-10 gap-4 items-center">
            <label class="col-span-1 text-sm font-medium text-gray-700">
              Customer Point
            </label>
            <input type="text" class="col-span-4 px-2 py-1 border border-gray-300 rounded"/>

            <label class="col-span-1 text-sm font-medium text-gray-700">
              Credit Amount
            </label>
            <input type="text" class="col-span-4 px-2 py-1 border border-gray-300 rounded"/>
          </div>

          <div class="grid grid-cols-10 gap-4 items-center">
            <label class="col-span-1 text-sm font-medium text-gray-700" for="transaction-start">
              Transaction Start On
            </label>
            <input
              type="date"
              id="transaction-start"
              name="transaction-start"
              class="col-span-4 px-2 py-1 border border-gray-300 rounded"
            />


            <label class="col-span-1 text-sm font-medium text-gray-700">Commission</label>
            <select class="col-span-4 px-2 py-1 border border-gray-300 rounded">
              <option value="">--None--</option>
            </select>
          </div>

          <div class="grid grid-cols-10 gap-4 items-center">
            <label class="col-span-1 text-sm font-medium text-gray-700">Warning</label>
            <input type="text" class="col-span-9 px-2 py-1 border border-gray-300 rounded w-full" />
          </div>


        </fieldset>


      </fieldset>

      <div class="grow p-3">
        <router-outlet/>
      </div>


      <!-- Footer Section -->
      <div class="flex items-stretch gap-1 mt-1">
        <!-- Left Side Buttons -->
        <fieldset class="w-1/2 border border-gray-400 p-4 rounded flex flex-col justify-center">
          <legend class="text-sm text-gray-700 px-1">Actions</legend>
          <div class="flex flex-wrap gap-4">
            <button class="px-4 py-2 bg-white text-gray-700 border border-gray-700 rounded hover:bg-blue-700 hover:text-white">Save</button>
            <button class="px-4 py-2 bg-white text-gray-700 border border-gray-700 rounded hover:bg-blue-700 hover:text-white">Delete</button>
            <button class="px-4 py-2 bg-white text-gray-700 border border-gray-700 rounded hover:bg-blue-700 hover:text-white">Clear All</button>
            <button class="px-4 py-2 bg-white text-gray-700 border border-gray-700 rounded hover:bg-blue-700 hover:text-white">Exit</button>
          </div>
        </fieldset>


        <fieldset class="w-1/2 border border-gray-400 p-4 rounded flex flex-col justify-center">
          <legend class="text-sm text-gray-700 px-1">View Existing Customer</legend>

          <div class="flex gap-4 mt-4">
            <div class="w-1/2">
              <label class="block text-sm text-gray-700 mb-1">Name</label>
              <select class="w-full border col-span-4 px-2 py-1 border border-gray-300 rounded">
                <option></option>
              </select>
            </div>

            <div class="w-1/2">
              <label class="block text-sm text-gray-700 mb-1">Code</label>
              <select class="w-full border col-span-4 px-2 py-1 border border-gray-300 rounded">
                <option></option>
              </select>
            </div>
          </div>

        </fieldset>
      </div>


    </div>

  `,
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {

  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  isActive(path: string): boolean {
    return this.currentRoute.endsWith(path);
  }

}

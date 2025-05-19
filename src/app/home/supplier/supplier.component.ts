import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-supplier',
  standalone: false,
  template: `
    <div class="p-4 space-y-4 bg-gray-100 min-h-screen">
      <div class="text-xl font-bold text-gray-800">Supplier Master</div>

      <fieldset class="border border-gray-400 p-2 rounded space-y-3">

      <div class="space-y-4">


        <div class="grid grid-cols-6 gap-4 items-center">

          <label class="col-span-1 text-sm font-medium text-gray-700">
            Supplier Name<span class="text-red-500">*</span>
          </label>
          <input type="text" class="col-span-2 px-2 py-1 border border-gray-300 rounded"/>

          <label class="col-span-1 text-sm font-medium text-gray-700">Supplier Group</label>
          <select class="col-span-2 px-2 py-1 border border-gray-300 rounded">
            <option value="">-- None --</option>
          </select>

        </div>


        <div class="grid grid-cols-6 gap-4 items-center">
          <label class="col-span-1 text-sm font-medium text-gray-700">
            Supplier Code<span class="text-red-500">*</span>
          </label>
          <input type="text" class="col-span-2 px-2 py-1 border border-gray-300 rounded"/>
        </div>


      </div>

      <fieldset class="border border-gray-400 p-2 rounded space-y-3">

      <div class="flex border-b border-gray-300 space-x-4">
        <button
          [ngClass]="{
        'text-blue-600 border-blue-600 font-bold': isActive('Office'),
        'text-gray-600 border-transparent font-bold': !isActive('Office')
      }"
          class="pb-2 text-lg hover:text-blue-600 hover:border-blue-600 border-b-2"
          [routerLink]="'Office'">
          Office
        </button>
      </div>


      <div class="grid grid-cols-9 gap-4 items-center">
        <label class="col-span-1 text-sm font-medium text-gray-700">
          Contact Person 1
        </label>
        <input type="text" class="col-span-2 px-2 py-1 border border-gray-300 rounded"/>

        <label class="col-span-1 text-sm font-medium text-gray-700">Designation</label>
        <select class="col-span-2 px-2 py-1 border border-gray-300 rounded">
          <option value="">-- None --</option>
        </select>

        <label class="col-span-1 text-sm font-medium text-gray-700">
          Extension/Mobile
        </label>
        <input type="text" class="col-span-2 px-2 py-1 border border-gray-300 rounded"/>
      </div>


      <div class="grid grid-cols-9 gap-4 items-center">
        <label class="col-span-1 text-sm font-medium text-gray-700">
          Contact Person 2
        </label>
        <input type="text" class="col-span-2 px-2 py-1 border border-gray-300 rounded"/>

        <label class="col-span-1 text-sm font-medium text-gray-700">Designation</label>
        <select class="col-span-2 px-2 py-1 border border-gray-300 rounded">
          <option value="">-- None --</option>
        </select>

        <label class="col-span-1 text-sm font-medium text-gray-700">
          Extension/Mobile
        </label>
        <input type="text" class="col-span-2 px-2 py-1 border border-gray-300 rounded"/>
      </div>


      <div class="grid grid-cols-9 gap-4 items-center">
        <label class="col-span-1 text-sm font-medium text-gray-700">
          Address [Line 1]
        </label>
        <input type="text" class="col-span-4 px-2 py-1 border border-gray-300 rounded"/>
      </div>

      <div class="grid grid-cols-9 gap-4 items-center">
        <label class="col-span-1 text-sm font-medium text-gray-700">
          Address [Line 2]
        </label>
        <input type="text" class="col-span-4 px-2 py-1 border border-gray-300 rounded"/>
      </div>

      <div class="grid grid-cols-9 gap-4 items-center">
        <label class="col-span-1 text-sm font-medium text-gray-700">
          Address [Line 3]
        </label>
        <input type="text" class="col-span-4 px-2 py-1 border border-gray-300 rounded"/>
      </div>

      <div class="grid grid-cols-9 gap-4 items-center">
        <label class="col-span-1 text-sm font-medium text-gray-700">
         City
        </label>
        <input type="text" class="col-span-2 px-2 py-1 border border-gray-300 rounded"/>
      </div>

      <div class="grid grid-cols-9 gap-4 items-center">
        <label class="col-span-1 text-sm font-medium text-gray-700">
          Telephone
        </label>
        <input type="text" class="col-span-2 px-2 py-1 border border-gray-300 rounded"/>
      </div>

      <div class="grid grid-cols-9 gap-4 items-center">
        <label class="col-span-1 text-sm font-medium text-gray-700">
          Fax No
        </label>
        <input type="text" class="col-span-2 px-2 py-1 border border-gray-300 rounded"/>

        <label class="col-span-1 text-sm font-medium text-gray-700">
          E-mail
        </label>
        <input type="text" class="col-span-2 px-2 py-1 border border-gray-300 rounded"/>

        <label class="col-span-1 text-sm font-medium text-gray-700">
          Web
        </label>
        <input type="text" class="col-span-2 px-2 py-1 border border-gray-300 rounded"/>
      </div>


      </fieldset>


      <div class="grid grid-cols-6 gap-4 items-center">
        <label class="col-span-1 text-sm font-medium text-gray-700">
          Credit Amount
        </label>
        <input type="text" class="col-span-2 px-2 py-1 border border-gray-300 rounded"/>

        <label class="col-span-1 text-sm font-medium text-gray-700">
        Debit Amount
        </label>
        <input type="text" class="col-span-2 px-2 py-1 border border-gray-300 rounded"/>
      </div>

      <div class="grid grid-cols-6 gap-4 items-center">
        <label class="col-span-1 text-sm font-medium text-gray-700">Remarks</label>
        <input type="text" class="col-span-5 px-2 py-1 border border-gray-300 rounded" />
      </div>

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
          <legend class="text-sm text-gray-700 px-1">View Existing Supplier</legend>

          <div class="flex gap-4 mt-4">

            <div class="w-1/2">
              <label class="block text-sm text-gray-700 mb-1">Supplier Name</label>
              <select class="w-full border col-span-4 px-2 py-1 border border-gray-300 rounded">
                <option></option>
              </select>
            </div>


            <div class="w-1/2">
              <label class="block text-sm text-gray-700 mb-1">Supplier Code</label>
              <select class="w-full border col-span-4 px-2 py-1 border border-gray-300 rounded">
                <option></option>
              </select>
            </div>
          </div>
        </fieldset>
      </div>


    </div>


  `,
  styleUrl: './supplier.component.scss'
})
export class SupplierComponent {
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

import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-item-master',
  standalone: false,
  template: `
    <div class="p-4 space-y-4 bg-gray-100 min-h-screen bg-yellow-50">
      <div class="text-xl font-bold text-gray-800">Item Master</div>

      <div class="space-y-4">
        <!-- Row 1 -->
        <div class="grid grid-cols-6 gap-4 items-center">
          <label class="col-span-1 text-sm font-medium text-gray-700">Item Name</label>
          <input type="text" class="col-span-2 px-2 py-1 border border-gray-300 rounded bg-white" />

          <label class="block text-sm font-medium text-gray-700">Item Group</label>
          <select class="mt-1 w-40 px-2 py-1 border border-gray-300 rounded bg-white">
            <option value="">-- None --</option>
            <!-- Add item group options here -->
          </select>
        </div>
        <!-- Row 2 -->
        <div class="grid grid-cols-6 gap-4 items-center">
          <label class="col-span-1 text-sm font-medium text-gray-700">Item Code</label>
          <input type="text" class="col-span-2 px-2 py-1 border border-gray-300 rounded bg-white" />

          <label class="col-span-1 text-sm font-medium text-gray-700">Sin Name</label>
          <input type="text" class="col-span-2 px-2 py-1 border border-gray-300 rounded bg-white" />
        </div>
      </div>
      <div class="flex border-b border-gray-300 space-x-4 justify-around">
        <button
          [ngClass]="{
      'text-blue-600 border-blue-600': isActive('master-details'),
      'text-gray-600 border-transparent': !isActive('master-details')
    }"
          class="pb-2 text-sm hover:text-blue-600 hover:border-blue-600 border-b-2 hover:bg-white"
          [routerLink]="'master-details'">
          Master Details
        </button>

        <button
          [ngClass]="{
      'text-blue-600 border-blue-600': isActive('item-search'),
      'text-gray-600 border-transparent': !isActive('item-search')
    }"
          class="pb-2 text-sm hover:text-blue-600 hover:border-blue-600 border-b-2 hover:bg-white"
          [routerLink]="'item-search'">
          Item Search
        </button>
        <button
          [ngClass]="{
      'text-blue-600 border-blue-600': isActive('picture'),
      'text-gray-600 border-transparent': !isActive('picture')
    }"
          class="pb-2 text-sm hover:text-blue-600 hover:border-blue-600 border-b-2 hover:bg-white"
          [routerLink]="'picture'">
          Picture
        </button>
      </div>

      <div class="grow p-3">
        <router-outlet/>
      </div>
      <!-- Footer Section -->
      <div class="flex mt-6 space-x-4">
        <!-- Left Side Buttons: 50% -->
        <div class="w-1/2 flex space-x-4">
          <button class="h-9 px-4 py-1 text-sm bg-white text-black rounded hover:bg-blue-700">Save</button>
          <button class="h-9 px-4 py-1 text-sm bg-white text-black rounded hover:bg-red-700">Delete</button>
          <button class="h-9 px-4 py-1 text-sm bg-white text-black rounded hover:bg-gray-500">Clear All</button>
          <button class="h-9 px-4 py-1 text-sm bg-white text-black rounded hover:bg-yellow-600">Exit</button>

        </div>

        <!-- Right Side View Existing Items: 50% -->
        <div class="w-1/2">
          <fieldset class="border border-gray-400 p-4 rounded">
            <legend class="text-sm text-gray-700 px-1">View Existing Items</legend>
            <div class="grid grid-cols-6 gap-2 items-center">
              <label class="col-span-2">Item Group:</label>
              <select class="col-span-2 border rounded px-2 py-1 bg-white">
                <option>&lt;&lt; All &gt;&gt;</option>
              </select>

              <label class="col-span-1 text-right">Code:</label>
              <input type="text" class="col-span-1 border rounded px-2 py-1 bg-white" />

              <label class="col-span-2 mt-2">Name:</label>
              <input type="text" class="col-span-4 border rounded px-2 py-1 bg-white" />
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  `,
  styleUrl: './item-master.component.scss'
})
export class ItemMasterComponent {
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-more-detail',
  standalone: false,
  template: `
    <div class="grid grid-cols-2 gap-6 mt-6 bg-white p-6 rounded shadow bg-yellow-50">

      <!-- Left Column -->
      <div class="space-y-4">

        <!-- Sub Item -->
        <div class="flex flex-col gap-2 text-sm">
          <!-- Row 1 -->
          <div>
            <label class="flex items-center gap-2"><input type="checkbox" /> Sub Item</label>
          </div>
          <!-- Row 2: Master Item Name -->
          <div class="flex items-center gap-2">
            <label class="w-40 font-medium text-gray-700">Master Item Name:</label>
            <select class="flex-1 border border-gray-300 px-2 py-1 bg-white rounded">
              <option value=""></option>
            </select>
          </div>

        </div>

        <!-- Quantity -->
        <div class="flex items-center gap-2">
          <label class="w-40 text-gray-700">Quantity</label>
          <input type="number" class="w-20 bg-white"/>
        </div>

        <!-- Cluster Item -->
        <fieldset class="border border-gray-300 p-2 rounded">
          <legend class="text-sm text-gray-700 px-1">Cluster Item</legend>
          <div>
            <label class="flex items-center gap-2"><input type="checkbox" /> Cluster Item</label>
          </div>
          <div class="flex gap-4">
            <label class="flex items-center gap-1"><input type="radio" name="cluster" /> Main Item</label>
            <label class="flex items-center gap-1"><input type="radio" name="cluster" /> Sub Item</label>
          </div>
        </fieldset>

        <!-- Price Options -->
        <fieldset class="border border-gray-300 p-2 rounded space-y-2">
          <legend class="text-sm text-gray-700 px-1">Price Options</legend>
          <div class="flex items-center gap-6">
            <label class="flex items-center gap-2">
              <input type="checkbox" />
              <span>Active Accumulated Price</span>
            </label>

            <label class="flex items-center gap-2">
              <span>Additional Fee:</span>
              <input type="text" class="border border-gray-300 px-2 py-1 rounded bg-white" />
            </label>
          </div>
          <div class="flex items-center gap-6">
            <label class="flex items-center gap-2">
              <input type="radio" name="priceOption" />
              <span>For Each Item</span>
            </label>

            <label class="flex items-center gap-2">
              <input type="radio" name="priceOption" />
              <span>For Item Item</span>
            </label>
          </div>
        </fieldset>
        <fieldset class="border border-gray-300 p-2 rounded space-y-2">
          <legend class="px-1"></legend>
          <div class="flex items-center gap-6">
            <label class="flex items-center gap-2">
              <input type="checkbox" />
              <span>Loose Selling Item</span>
            </label>

            <label class="flex items-center gap-2">
              <span>Loose Price</span>
              <input type="text" class="border border-gray-300 px-2 py-1 rounded bg-white" />
            </label>
          </div>

          <div class="flex items-center gap-6">
            <label class="flex items-center gap-2">
              <span>Unit Type</span>
              <input type="text" class="border border-gray-300 px-2 py-1 rounded bg-white" />
            </label>
            <label class="flex items-center gap-2">
              <span>Loose Price</span>
              <input type="text" class="border border-gray-300 px-2 py-1 rounded bg-white" />
            </label>
          </div>
        </fieldset>
        <div>
          <label class="flex items-center gap-2">
            <span>Weight or Volume</span>
            <input type="text" class="border border-gray-300 px-2 py-1 rounded bg-white" />Kg or ml
          </label>
        </div>
      </div>

      <!-- Right Column -->
      <div class="space-y-4">

        <!-- More Description -->
        <div>
          <label class="text-gray-700 font-medium">More Description</label>
          <textarea class="w-full border border-gray-300 rounded bg-white px-2 py-1 h-20"></textarea>
        </div>

        <!-- Loading Charges -->
        <fieldset class="border border-gray-300 p-2 rounded space-y-2">
          <legend class="px-1">Loading Charges</legend>
          <div class="flex items-center gap-2">
            <label class="w-40 text-gray-700">Amount Per Item</label>
            <input type="number" class="w-20 bg-white"/>
          </div>
        </fieldset>


        <!-- Payment Terms -->
        <div class="flex items-center gap-2">
          <label class="w-40 text-gray-700">Payment Terms</label>
          <input type="number" class="w-20 bg-white"/>
        </div>


        <!-- Stop Transaction -->
        <fieldset class="border border-gray-300 p-3 rounded space-y-3">
          <legend class="text-sm text-gray-700 px-1">Stop Transaction</legend>

          <div class="flex flex-wrap gap-4 items-center">
            <label class="flex items-center gap-2">
              <input type="checkbox" />
              <span>Discontinue</span>
            </label>

            <label class="flex items-center gap-2">
              <span class="text-sm text-gray-700">Discontinue From:</span>
              <input type="date" class="border border-gray-300 rounded px-2 py-1 bg-white" value="2025-06-05" />
            </label>
          </div>

          <div class="flex items-center gap-4">
            <label class="w-40 text-gray-700 text-sm">Reason</label>
            <input type="text" class="flex-1 border border-gray-300 rounded px-2 py-1 bg-white" />
          </div>

        </fieldset>


        <!-- Inventory Location -->
        <div class="flex items-center gap-4 mb-4">
          <label for="inventoryLocation" class="w-40 text-gray-700 font-medium text-sm">
            Inventory Location
          </label>
          <select id="inventoryLocation" class="w-60 border border-gray-300 rounded px-2 py-1 bg-white">
            <option>STORE</option>
          </select>
        </div>


      </div>
    </div>

  `,
  styleUrl: './more-detail.component.scss'
})
export class MoreDetailComponent {

}

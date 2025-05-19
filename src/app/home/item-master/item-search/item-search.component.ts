import { Component } from '@angular/core';

@Component({
  selector: 'app-item-search',
  standalone: false,
  template: `
    <div class="p-6 bg-white shadow rounded-lg space-y-6 bg-yellow-50">


      <!-- Radio Buttons -->
      <div class="flex justify-end items-center gap-6">
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="radio" name="status" class="accent-blue-600 bg-white" checked />
          <span>Active Items</span>
        </label>
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="radio" name="status" class="accent-blue-600 bg-white" />
          <span>Discontinued Items</span>
        </label>
      </div>


      <!-- Input Search Form -->
      <!-- Row 1 -->
      <div class="grid grid-cols-6 gap-4 items-center mb-4">
        <label class="col-span-1 text-sm text-gray-700">Item Name:</label>
        <input type="text" class="col-span-2 border rounded px-2 py-1 bg-white" />
      </div>

      <!-- Row 2 -->
      <div class="grid grid-cols-6 gap-4 items-center">
        <label class="col-span-1 text-sm text-gray-700">Item Name:</label>
        <input type="text" class="col-span-2 border rounded px-2 py-1 bg-white" />

        <label class="col-span-1 text-sm text-gray-700">Description:</label>
        <input type="text" class="col-span-1 border rounded px-2 py-1 bg-white" />

        <button class="bg-gray-200 text-black px-4 py-2 rounded col-span-1">Search</button>
      </div>


      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm text-left border border-gray-300">
          <thead class="bg-gray-100">
          <tr>
            <th class="border px-4 py-2">Item Name</th>
          </tr>
          </thead>
          <tbody class="bg-white">
          <tr>
            <td class="border px-4 py-2 h-10"></td>
          </tr>

          </tbody>
        </table>
      </div>
    </div>

  `,
  styleUrl: './item-search.component.scss'
})
export class ItemSearchComponent {

}

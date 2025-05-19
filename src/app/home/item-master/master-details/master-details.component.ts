import { Component } from '@angular/core';

@Component({
  selector: 'app-master-details',
  standalone: false,
  template: `
    <div class="grid grid-cols-2 gap-6 bg-white p-6 rounded shadow bg-yellow-50">
      <div class="space-y-4 w-full max-w-4xl">
        <!-- Row 1: Description (full width) -->
        <div class="flex items-center">
          <label class="w-40 text-gray-700">Description</label>
          <input type="text" class="flex-1 border border-gray-300 px-2 py-1 bg-white rounded" />
        </div>

        <!-- Row 2: Retail Price / Avg Cost Price -->
        <div class="grid grid-cols-2 gap-4">
          <div class="flex items-center">
            <label class="w-40 text-gray-700">Retail Price</label>
            <input type="text" class="flex-1 border border-gray-300 px-2 py-1 bg-white rounded" />
          </div>
          <div class="flex items-center">
            <label class="w-40 text-gray-700">Avg Cost Price</label>
            <input type="text" class="flex-1 border border-gray-300 px-2 py-1 bg-white rounded" />
          </div>
        </div>

        <!-- Row 3: Available Qty (50%) -->
        <div class="w-1/2 flex items-center">
          <label class="w-40 text-gray-700">Available Qty</label>
          <input type="text" class="flex-1 border border-gray-300 px-2 py-1 bg-white rounded" />
        </div>

        <!-- Row 4: Ordered Qty / Estimated Qty -->
        <div class="grid grid-cols-2 gap-4">
          <div class="flex items-center">
            <label class="w-40 text-gray-700">Ordered Qty</label>
            <input type="text" class="flex-1 border border-gray-300 px-2 py-1 bg-white rounded" />
          </div>
          <div class="flex items-center">
            <label class="w-40 text-gray-700">Estimated Qty</label>
            <input type="text" class="flex-1 border border-gray-300 px-2 py-1 bg-white rounded" />
          </div>
        </div>





        <div class="p-4 border border-gray-300 rounded-md w-full max-w-2xl">
          <div class="grid grid-cols-2 gap-4">
            <label class="block font-medium text-gray-700">Default Supplier</label>
            <select class="w-full border border-gray-300 px-2 py-1 bg-white rounded">
              <option value="">DAVINIK DISTRIBUTORS</option>
            </select>

            <label class="block font-medium text-gray-700">Item Type</label>
            <select class="w-full border border-gray-300 px-2 py-1 bg-white rounded">
              <option>- None -</option>
            </select>

            <label class="block font-medium text-gray-700">Unit Type</label>
            <select class="w-full border border-gray-300 px-2 py-1 bg-white rounded">
              <option>- None -</option>
            </select>

          </div>
        </div>
      </div><!-- Right Column: Checkbox Section (Accurate Row Layout) -->
      <div class="p-4 border border-gray-300 rounded-md bg-white w-full max-w-xl bg-yellow-50">
        <div class="flex flex-col gap-2 text-sm">


          <label class="flex items-center gap-2"><input type="checkbox" /> Appear on GRN</label>
          <label class="flex items-center gap-2"><input type="checkbox" /> Appear on Invoice</label>
          <label class="flex items-center gap-2"><input type="checkbox"  /> Cost [Not Validate in Invoice]</label>
          <div class="flex items-center gap-2">
            <label class="flex items-center gap-2"><input type="checkbox" /> Expiry Required</label>
            <input type="radio" name="lifeCycle" />
            <label>Life Cycle [Days]</label>
            <input type="text" class="border border-gray-300 rounded bg-white px-2 py-1 w-24" />
          </div>
          <div class="flex items-center gap-2">
            <label class="flex items-center gap-2"><input type="checkbox" /> Pack Item</label>
            <label>Pack Size</label>
            <input type="text" class="border border-gray-300 rounded bg-white px-2 py-1 w-20" value="1" />
          </div>
          <label class="flex items-center gap-2"><input type="checkbox" /> Returnable Item</label>
          <label class="flex items-center gap-2"><input type="checkbox" /> Serial Number Required</label>
          <label class="flex items-center gap-2"><input type="checkbox" /> Service Charge</label>
          <label class="flex items-center gap-2"><input type="checkbox" /> Service Item</label>
          <label class="flex items-center gap-2"><input type="checkbox" /> Stock Maintain</label>
          <label class="flex items-center gap-2"><input type="checkbox" /> Stock Validate</label>
          <div class="flex items-center gap-2">
            <label class="flex items-center gap-2"><input type="checkbox" >Warranty Item</label>
            <input type="text" placeholder="Months" class="border border-gray-300  bg-white rounded px-2 py-1 w-16" />
            <input type="text" placeholder="Days" class="border border-gray-300  bg-white rounded px-2 py-1 w-16" />
          </div>
        </div>
      </div>

      <div class="flex">
        <label class="w-40 text-gray-700">Remarks</label>
        <input type="text" class="flex-1 border border-gray-300 px-2 py-1 bg-white rounded" />
      </div>
    </div>
  `,
  styleUrl: './master-details.component.scss'
})
export class MasterDetailsComponent {

}

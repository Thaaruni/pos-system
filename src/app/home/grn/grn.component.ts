import { Component } from '@angular/core';

@Component({
  selector: 'app-grn',
  standalone: false,
  template: `
    <div class="p-4 bg-yellow-100 min-h-screen font-sans text-sm">
      <h2 class="text-xl font-bold text-left mb-2">GOODS RECEIVE</h2>

      <!-- Top Header Section -->
      <div class="grid grid-cols-5 gap-4 border border-white-300  p-4 mb-4">
        <div>
          <label>Invoice No</label>
          <input type="text" class="w-full border p-1 bg-white" />
        </div>
        <div>
          <label>Category</label>
          <select class="w-full border p-1 bg-white">
            <option>Direct GRN</option>
          </select>
        </div>
        <div>
          <label>Date</label>
          <input type="date" class="w-full border p-1 bg-white" />
        </div>
        <div>
          <label>GRN NO:</label>
          <input type="text" value="GRN00094" disabled class="w-full border p-1  bg-white" />
        </div>

        <div>
          <label>Supplier</label>
          <input type="text" class="w-full border p-1 bg-white" />
        </div>
        <div>
          <label>Staff</label>
          <select class="w-full border p-1 bg-white">
            <option>NON</option>
          </select>
        </div>
        <div>
          <label>Credit</label>
          <input type="text" class="w-full border p-1 bg-white" />
        </div>
        <div>
          <label>Pending Chq.</label>
          <input type="text" class="w-full border p-1 bg-white" />
        </div>
        <div>
          <label>Remarks</label>
          <input type="text" class="w-full border p-1 bg-white" />
        </div>
      </div>

      <div class="border border-black p-4 mb-4 w-[700px]">
        <div class="grid grid-cols-2 gap-x-6 gap-y-2 mb-4">
          <div class="flex justify-between items-center gap-2">
            <label class="w-32">Item Name</label>
            <select class="border p-1 w-40 bg-white">
              <option>Select</option>
            </select>
          </div>

          <div class="flex justify-between items-center gap-2">
            <label class="w-32">Quantity</label>
            <input type="text" class="border p-1 w-40 bg-white" />
          </div>

          <div class="flex justify-between items-center gap-2">
            <label class="w-32">Expiry Date</label>
            <input type="date" class="border p-1 w-40 bg-white" value="2025-05-02 " />
          </div>

          <div class="flex justify-between items-center gap-2">
            <label class="w-32">Purchase Price</label>
            <input type="text" class="border p-1 w-40 bg-white" />
          </div>

          <div class="flex justify-between items-center gap-2">
            <label class="w-32">Unit Discount</label>
            <input type="text" class="border p-1 w-40 bg-white" />
          </div>

          <div class="flex justify-between items-center gap-2">
            <label class="w-32">Free Quantity</label>
            <input type="text" class="border p-1 w-40 bg-white" />
          </div>

          <div class="flex justify-between items-center gap-2">
            <label class="w-32">Cost</label>
            <input type="text" class="border p-1 w-40 bg-white" />
          </div>

          <div class="flex justify-between items-center gap-2">
            <label class="w-32">Total Price</label>
            <input type="text" class="border p-1 w-40 bg-white" />
          </div>

          <div class="flex justify-between items-center gap-2">
            <label class="w-32">Discount</label>
            <input type="text" class="border p-1 w-40 bg-white" />
          </div>

          <div class="flex justify-between items-center gap-2">
            <label class="w-32">VAT</label>
            <input type="text" class="border p-1 w-40 bg-white" />
          </div>

          <div class="flex justify-between items-center gap-2">
            <label class="w-32">NBT</label>
            <input type="text" class="border p-1 w-40 bg-white" />
          </div>

          <div class="flex justify-between items-center gap-2">
            <label class="w-32">Transport</label>
            <input type="text" class="border p-1 w-40 bg-white" />
          </div>
        </div>

        <!-- Totals -->
        <div class="grid grid-cols-2 gap-x-6 gap-y-2 font-bold mb-4">
          <div class="flex justify-between items-center gap-2">
            <label class="w-32">List Total</label>
            <input type="text" class="border p-1 w-40 bg-white" />
          </div>
          <div class="flex justify-between items-center gap-2">
            <label class="w-32">Gross Total</label>
            <input type="text" class="border p-1 w-40 bg-white" />
          </div>
          <div class="flex justify-between items-center gap-2">
            <label class="w-32">Grand Total</label>
            <input type="text" class="border p-1 w-40 bg-white" />
          </div>
        </div>

        <!-- Pay Method -->
        <div class=" mb-4">
          <label class="block mb-1">Pay Method</label>
          <select class="border p-1 w-full bg-white">
            <option>Select</option>
          </select>
        </div>

        <!-- Buttons -->
        <div class="flex gap-3">
          <button class="border px-4 py-1 bg-white">Save</button>
          <button class="border px-4 py-1 bg-white">Clear All</button>
          <button class="border px-4 py-1 bg-white">Exit</button>
        </div>
      </div>


      <!-- Items Entry Section -->
      <div class="border border-black mb-4">
        <div class="grid grid-cols-14 text-xs bg-gray-200 border-b border-black">
          <div class="p-1">Item Name</div>
          <div class="p-1">Quantity</div>
          <div class="p-1">Expiry Date</div>
          <div class="p-1">Purchase Price</div>
          <div class="p-1">Unit Discount</div>
          <div class="p-1">VAT</div>
          <div class="p-1">NBT</div>
          <div class="p-1">Free Quantity</div>
          <div class="p-1">Cost</div>
          <div class="p-1">Total Price</div>
          <div class="p-1">Discount</div>
          <div class="p-1">VAT</div>
          <div class="p-1">NBT</div>
          <div class="p-1">Transport</div>
        </div>

        <!-- One Example Row -->
        <div class="grid grid-cols-14 text-xs">

          <input type="text" class="border p-1 bg-white" />

          <input type="text" class="border p-1 bg-white" />
          <input type="text" class="border p-1 bg-white" />
          <input type="text" class="border p-1 bg-white" />
          <input type="text" class="border p-1 bg-white" />
          <input type="text" class="border p-1 bg-white" />
          <input type="text" class="border p-1 bg-white" />
          <input type="text" class="border p-1 bg-white" />
          <input type="text" class="border p-1 bg-white" />
          <input type="text" class="border p-1 bg-white" />
          <input type="text" class="border p-1 bg-white" />
          <input type="text" class="border p-1 bg-white" />
          <input type="text" class="border p-1 bg-white" />
          <input type="text" class="border p-1 bg-white" />
        </div>
      </div>

      <!-- Footer Section -->
      <div class="grid grid-cols-2 gap-4">
        <!-- Left: Buttons -->
        <div class="flex flex-col gap-2">
          <button class="border bg-white px-2 py-1 w-32">F2 Remove Row</button>
          <button class="border bg-white px-2 py-1 w-32">Generate GRN</button>
        </div>


      </div>
    </div>

  `,
  styleUrl: './grn.component.scss'
})
export class GrnComponent {

}

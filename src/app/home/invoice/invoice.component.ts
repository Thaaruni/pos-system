import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice',
  standalone: false,
  template: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Invoice UI</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-yellow-100 p-4 font-sans text-sm text-black">
    <div class="text-2xl font-bold text-left">INVOICE</div>
    <div class="flex gap-4 h-screen">

      <!-- Left Section -->
      <div class="w-3/4 flex flex-col gap-4">
        <div class="grid grid-cols-3 gap-x-6 gap-y-3 text-sm">
          <!-- Row 1 -->
          <div class="flex items-center gap-2">
            <label class="w-24">Customer</label>
            <select class="border p-1 w-full bg-white"><option>CASH</option></select>
          </div>
          <div class="flex items-center gap-2">
            <label class="w-20">Print As</label>
            <input type="text" value="CASH" class="border p-1 w-full bg-white">
          </div>
          <div class="flex items-center gap-2">
            <label class="w-32">Points / Avl.Credit</label>
            <input type="text" value="0" class="border p-1 w-1/2 bg-white">
            <input type="text" value="0.00" class="border p-1 w-1/2 bg-white">
          </div>

          <!-- Row 2 -->
          <div class="flex items-center gap-2">
            <label class="w-24">Staff</label>
            <select class="border p-1 w-1/2 bg-white"><option>NON</option></select>
            <input type="text" value="01" class="border p-1 w-1/2 bg-white">
          </div>
          <div class="flex items-center gap-2">
            <label class="w-20">Type</label>
            <input type="text" value="Invoice" class="border p-1 w-full bg-white">
          </div>
          <div class="flex items-center gap-2">
            <label class="w-28">Date & Time</label>
            <input type="text" value="02/05/25" class="border p-1 w-1/2 bg-white">
            <input type="text" value="10:53:16 AM" class="border p-1 w-1/2 bg-white ">
          </div>

          <!-- Row 3 -->
          <div class="flex items-center gap-2">
            <label class="w-24">Ref. No:</label>
            <input type="text" class="border p-1 w-full bg-white">
            <label class="w-20">Inv No</label>
            <input type="text" value="00000006" class="border p-1 w-full  bg-white">
          </div>
          <div class="flex items-center gap-2">
            <label class="w-28">Location</label>
            <input type="text" value="STORE" disabled class="border p-1 bg-gray-200 w-full bg-white">
          </div>
          <!-- Row 4 -->
          <div class="flex items-center gap-2">
            <label class="w-24">Tax Bill</label>
            <input type="checkbox">
            <label class="w-20">Price</label>
            <input type="text" value="Cash Price" class="border p-1 w-full bg-white">
          </div>
          <div></div> <!-- Empty to align grid -->
        </div>

        <!-- Item Entry Headers -->
        <div class="border border-black mb-4">
          <div class="grid grid-cols-8 text-xs bg-gray-200 border-b border-black">
          <div class="p-1">Code</div>
          <div class="p-1">Item Name</div>
          <div class="p-1">Price</div>
          <div class="p-1">Qty</div>
          <div class="p-1">Unit Discount</div>
          <div class="p-1">Sell price</div>
          <div class="p-1">Loading</div>
          <div class="p-1">Gross Total</div>
        </div>
        <!-- One Example Row -->
        <div class="grid grid-cols-8 text-xs">
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

        <!-- Item Entry Table Area -->
        <div class="h-40 border bg-white"></div>

        <!-- F1 - F12 Buttons -->
        <div class="grid grid-cols-3 grid-rows-1 gap-2 text-s">
          <div class="grid grid-cols-3 grid-rows-4 gap-2 text-xs">
            <button class="bg-gray-300 px-2 py-1 rounded">F1 <br> Find Item</button>
            <button class="bg-gray-300 px-2 py-1 rounded">F2 <br> Void Items</button>
            <button class="bg-gray-300 px-2 py-1 rounded">F3 <br> Void Sale</button>
            <button class="bg-gray-300 px-2 py-1 rounded">F4 <br> Drop Down</button>
            <button class="bg-gray-300 px-2 py-1 rounded">F5 <br> Cash Pay</button>
            <button class="bg-gray-300 px-2 py-1 rounded">F6 <br> Mix Payment</button>
            <button class="bg-gray-300 px-2 py-1 rounded">F7 <br> Credit Invo.</button>
            <button class="bg-gray-300 px-2 py-1 rounded">F8 <br> Session</button>
            <button class="bg-gray-300 px-2 py-1 rounded">F9 <br> Hold Invoice</button>
            <button class="bg-gray-300 px-2 py-1 rounded">F10 <br> Customer</button>
            <button class="bg-gray-300 px-2 py-1 rounded">F11 <br> Cash Deposit</button>
            <button class="bg-gray-300 px-2 py-1 rounded">F12 <br> Go To Item</button>
          </div>
          <div class=" border p-2  ">
            <h2>Credit Card Payments</h2>
            <label>Card No:</label>
            <input type="text" class="w-full border p-1 py-1 mb-1 bg-white" />
            <label>Bank</label>
            <input type="text" class="w-full border p-1 py-1 bg-white" />
            <label>Card Type</label>
            <input type="text" class="w-full border p-1 py-1 bg-white" />
            <label>Amount</label>
            <input type="text" class="w-full border p-1 py-1 mb-1 bg-white" />

          </div>
          <!-- Totals -->
          <div class="grid grid-cols-2  gap-2 text-s">
            <div>
              <label>Item Discount</label>
              <input type="text" class="w-full border p-1 py-1 bg-white" />
            </div>
            <div>
              <label>Sub Total</label>
              <input type="text" class="w-full border p-1 py-1 bg-white" />
            </div>
            <div>
              <label>Loading</label>
              <input type="text" class="w-full border p-1 py-1 bg-white" />
            </div>
            <div>
              <label>Extra Discount</label>
              <input type="text" class="w-full border p-1 py-1 bg-white" />
            </div>
            <div>
              <label>No of Items</label>
              <input type="text" class="w-full border p-1 py-1 bg-white" />
            </div>
            <div>
              <label>Net Total</label>
              <input type="text" class="w-full border p-1 py-1 bg-white" />
            </div>
            <div>
              <label>Total Items</label>
              <input type="text" class="w-full border p-1 py-1 bg-white" />
            </div>
            <div>
              <label>Cash Paid</label>
              <input type="text" class="w-full border p-1 py-1 bg-white" />
            </div>
            <div>
              <label>Credit Amount</label>
              <input type="text" class="w-full border p-1 py-1 bg-white" />
            </div>
            <div>
              <label>Balance</label>
              <input type="text" class="w-full border p-1 py-1 bg-white" />
            </div>
          </div>
        </div>
      </div>

      <!-- Right Section -->
      <div class="w-1/4 flex flex-col gap-2 h-full bg-white border ">
        <div class=" flex flex-col text-s">
          <!-- Tabs -->
          <div class="flex border-b">
            <button class="flex-1 px-2 py-1 text-center border-r">Gen</button>
            <button class="flex-1 px-2 py-1 text-center border-r">Pay</button>
            <button class="flex-1 px-2 py-1 text-center border-r">Delivery</button>
            <button class="flex-1 px-2 py-1 text-center">More</button>
          </div>

          <!-- Tab Content -->
          <div class="p-2 flex flex-col gap-1">
            <div>
              <label>Free Issued Qty</label>
              <input type="text" class="w-full border p-1 py-1 bg-yellow-100" />
            </div>
            <div>
              <label>Free Issued Amt</label>
              <input type="text" class="w-full border p-1 py-1 bg-yellow-100" />
            </div>
            <div>
              <label>Given Discount</label>
              <input type="text" class="w-full border p-1 py-1 bg-yellow-100" />
            </div>
            <div>
              <label>Remarks</label>
              <textarea class="w-full border p-1 py-1 bg-yellow-100" rows="3"></textarea>
            </div>
          </div>
        </div>
      </div>

    </div>
    </body>
    </html>

  `,
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {
  invoice = {
    customer: 'CASH',
    printAs: 'CASH',
    points: 0,
    staff: 'NON',
    staffNo: '01',
    type: 'Invoice',
    dateTime: '02/05/25 10:53:16 AM',
    refNo: '',
    invNo: '00000006',
    location: 'STORE',
    priceType: 'Cash Price'
  };
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: false,
  template: `
    <div class="max-w-7xl mx-auto p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 border border-yellow-600 shadow-md font-sans text-sm">

      <h1 class="text-3xl font-bold text-yellow-900 border-b border-yellow-700 mb-3">SUPPLIER PAYMENTS</h1>

      <div class="flex gap-4 mb-4">

        <div class="w-1/3">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="font-bold">Location</label>
              <select class="w-full bg-white border border-gray-400 p-1">
                <option>STORE</option>
              </select>
            </div>

            <div>
              <label class="font-bold">Receipt No</label>
              <input type="text" class="w-full bg-white border border-gray-400 p-1" value="PAY00002" />
            </div>

            <div>
              <label class="font-bold">Ref. No</label>
              <input type="text" class="w-full bg-white border border-gray-400 p-1" />
            </div>

            <div>
              <label class="font-bold">Date</label>
              <input type="date" class="w-full bg-white border border-gray-400 p-1" value="2025-05-02" />
            </div>

            <div>
              <label class="font-bold">Supplier Name</label>
              <input type="text" class="w-full bg-white border border-gray-400 p-1" />
            </div>

            <div>
              <label class="font-bold">Last payed Amount & Date</label>
              <input type="text" class="w-full bg-white border border-gray-400 p-1" />
            </div>

            <div>
              <label class="font-bold">Total Credit Amount</label>
              <input type="text" class="w-full bg-white border border-gray-400 p-1" />
            </div>

            <div>
              <label class="font-bold">Credit Term</label>
              <input type="text" class="w-full bg-white border border-gray-400 p-1" />
            </div>
          </div>
        </div>

        <div class="w-2/3">
          <table class="w-full text-xs border border-collapse border-gray-600 bg-white">
            <thead class="bg-yellow-300">
            <tr>
              <th class="border p-1">Invoice No</th>
              <th class="border p-1">Ref. No</th>
              <th class="border p-1">Inv. Date</th>
              <th class="border p-1">No of Days</th>
              <th class="border p-1">Invoice Amt</th>
              <th class="border p-1">Due Amount</th>
              <th class="border p-1">Pay Amount</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="border p-1 text-center" colspan="7"> </td>
            </tr>
            </tbody>
          </table>

          <div class="flex justify-between items-center mt-2">
            <button class="bg-gray-200 px-2 py-1 font-bold border border-gray-500 rounded hover:bg-gray-400 hover:text-white transition">Clear List</button>
            <div class="flex items-center space-x-2">
              <span class="font-bold text-sm">Selected Total</span>
              <input type="text" class="w-24 border border-gray-400 p-1 text-right text-red-600 bg-white" value="0.00" />
            </div>
          </div>
        </div>
      </div>


      <div class="flex gap-4 mb-4">

        <div class="w-1/3">
          <div>
            <label class="font-bold">Payment Method </label>
            <select class="w-full bg-white border border-gray-400 p-1">
              <option value="">Select</option>
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="cheque">Cheque</option>
            </select>
          </div>
        </div>

        <div class="w-2/3">
          <div class="mb-3">
            <table class="w-full text-xs border border-collapse border-gray-600 bg-white">
              <thead class="bg-yellow-300">
              <tr>
                <th class="border p-1">Pay Method</th>
                <th class="border p-1">Cheque No / Card No</th>
                <th class="border p-1">Description</th>
                <th class="border p-1">Date</th>
                <th class="border p-1">Amount</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="border p-1" colspan="5">
                  <!-- Payment rows go here -->
                </td>
              </tr>
              </tbody>
            </table>

            <div class="mt-2">
              <button class="bg-gray-300 px-3 py-1 font-bold border border-gray-500 rounded hover:bg-gray-400 hover:text-white transition">Remove Row</button>
            </div>
          </div>

          <div class="flex justify-between items-center mt-4 ">
            <div class="grid grid-cols-2 gap-4 items-center">
              <div class="flex items-center space-x-2">
                <label class="font-bold">Due Amount</label>
                <input type="text" class="w-28 border border-gray-400 p-1 text-right bg-white" />
              </div>
              <div class="flex items-center space-x-2">
                <label class="font-bold">Total Paid</label>
                <input type="text" class="w-28 border border-gray-400 p-1 text-right bg-white" value="0.00" />
              </div>
            </div>
            <div class="space-x-2">
              <button class="bg-blue-500 text-white px-4 py-1 font-bold rounded hover:bg-blue-700 transition">Save</button>
              <button class="bg-yellow-300 px-4 py-1 font-bold border border-gray-500 rounded hover:bg-yellow-400 transition">Clear</button>
              <button class="bg-red-500 text-white px-4 py-1 font-bold rounded hover:bg-red-700 transition">Exit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

}

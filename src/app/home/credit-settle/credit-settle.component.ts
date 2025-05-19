import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-settle',
  standalone: false,
  template: `
    <div class="bg-gradient-to-r from-yellow-100 to-yellow-300 border-2 border-yellow-600 p-4 rounded shadow-md text-sm w-full max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold text-yellow-900 mb-4 text-left border-b border-yellow-700 pb-1">CREDIT SETTLEMENT</h1>

      <div class="border-b border-yellow-700 pb-2">
        <!-- Top section -->
        <div class="grid grid-cols-3 gap-4 mb-4">

          <div>
            <label class="block font-semibold">Receipt No:</label>
            <input type="text" class="w-full bg-white border border-gray-400 p-1" value="RCP00002" />
          </div>
          <div>
            <label class="block font-semibold">Date</label>
            <input type="date" class="w-full bg-white border border-gray-400 p-1" value="2025-05-02" />
          </div>
          <div>
            <label class="block font-semibold">Customer Code</label>
            <input type="text" class="w-full bg-white border border-gray-400 p-1" />
          </div>
        </div>

        <div class="grid grid-cols-4 gap-4 mb-4 ">
          <div>
            <label class="block font-semibold">Customer</label>
            <select class="w-full bg-white border border-gray-400 p-1">
              <option></option>
            </select>
          </div>
          <div>
            <label class="block font-semibold">Current Payment</label>
            <input type="text" class="w-full bg-white border border-gray-400 p-1"  />
          </div>
          <div>
            <label class="block font-semibold">Last Paid</label>
            <input type="text" class="w-full bg-white border border-gray-400 p-1" />
          </div>
          <div>
            <label class="block font-semibold">Credit Term (Days)</label>
            <input type="text" class="w-full bg-white border border-gray-400 p-1" />
          </div>
          <div>
            <label class="block font-semibold">Credit Limit</label>
            <input type="text" class="w-full bg-white border border-gray-400 p-1" />
          </div>
          <div>
            <label class="block font-semibold">Tot.CR.Invo.</label>
            <input type="text" class="w-full bg-white border border-gray-400 p-1" />
          </div>
        </div>

        <button class="bg-gray-200 text-sm font-bold px-3 py-1 mt-1 border border-gray-500 rounded cursor-pointer hover:bg-blue-600 hover:text-white transition duration-200 ">Settle</button>

      </div>

      <div class="border-b border-yellow-700 pb-2">
        <!-- Table header mock -->
        <div class="mt-6 overflow-x-auto">
          <h3 class="text-sm font-semibold mb-2">Payments</h3>
          <table class="w-full text-xs border border-collapse border-gray-700">
            <thead class="bg-yellow-200 text-left">
            <tr>
              <th class="border border-gray-700 p-1">Invoice No</th>
              <th class="border border-gray-700 p-1">Inv. Date</th>
              <th class="border border-gray-700 p-1">Inv. Payment Type</th>
              <th class="border border-gray-700 p-1">Payment Date</th>
              <th class="border border-gray-700 p-1">Invoice Amt.</th>
              <th class="border border-gray-700 p-1">Due Amount</th>
              <th class="border border-gray-700 p-1">Pay Amount</th>
            </tr>
            </thead>
            <tbody>
            <tr class="bg-white">
              <td colspan="9" class="border border-gray-300 p-4 text-center text-gray-500">No records</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class="flex justify-between mt-4 text-sm">
          <div>
            <button class="bg-gray-200 px-3 py-1 font-bold border border-gray-500 mr-2 rounded cursor-pointer hover:bg-gray-400 hover:text-white transition duration-200">Print</button>
            <button class="bg-gray-200 px-3 py-1 font-bold border border-gray-500 rounded cursor-pointer hover:bg-gray-400 hover:text-white transition duration-200">Report</button>
          </div>
          <div class="font-bold ">Pay Total: <input type="text" class="border border-gray-500 bg-white w-20 text-right p-1 mx-2" /></div>
        </div>
      </div>


      <!-- Payments section -->
      <div class="mt-6">
<!--        <h3 class="text-sm font-semibold mb-2">Payments</h3>-->
<!--        <table class="w-full text-xs border border-collapse border-gray-700">-->
<!--          <thead class="bg-yellow-200">-->
<!--          <tr>-->
<!--            <th class="border p-1">Pay Type</th>-->
<!--            <th class="border p-1">Amount</th>-->
<!--            <th class="border p-1">Cheq/Card/Vou. Number</th>-->
<!--            <th class="border p-1">Bank/Branch</th>-->
<!--            <th class="border p-1">Date/ C. Type</th>-->
<!--            <th class="border p-1">Drawer/Cus. Name</th>-->
<!--            <th class="border p-1">Total</th>-->
<!--          </tr>-->
<!--          </thead>-->
<!--          <tbody>-->
<!--          <tr class="bg-white">-->
<!--            <td colspan="7" class="border p-4 text-center text-gray-500">No payments</td>-->
<!--          </tr>-->
<!--          </tbody>-->
<!--        </table>-->
<!--        <div class="mt-2 ">-->
<!--          <button class="bg-gray-200 px-2 py-1 font-bold border border-gray-500 mr-1 rounded cursor-pointer hover:bg-gray-400 hover:text-white transition duration-200">Clear List</button>-->
<!--          <button class="bg-gray-200 px-2 py-1 font-bold border border-gray-500 mr-1 rounded cursor-pointer hover:bg-gray-400 hover:text-white transition duration-200">Remove</button>-->
<!--          <button class="bg-gray-200 px-2 py-1 font-bold border border-gray-500 rounded cursor-pointer hover:bg-gray-400 hover:text-white transition duration-200">Add Row</button>-->
<!--        </div>-->

<!--        <div>-->
<!--          <table class="w-full text-xs border border-collapse border-gray-700">-->
<!--            <thead class="bg-yellow-200">-->
<!--            <tr>-->
<!--              <th class="border p-1">Pay Type</th>-->
<!--              <th class="border p-1">Amount</th>-->
<!--              <th class="border p-1">Cheq/Card/Vou. Number</th>-->
<!--              <th class="border p-1">Bank/Branch</th>-->
<!--              <th class="border p-1">Date/ C. Type</th>-->
<!--              <th class="border p-1">Drawer/Cus. Name</th>-->
<!--              <th class="border p-1">R/C Collection</th>-->
<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--            <tr class="bg-white">-->
<!--              <td class="border p-1">-->
<!--                <select class="w-full border border-gray-400 p-1">-->
<!--                  <option value="">Select</option>-->
<!--                  <option value="cash">Cash</option>-->
<!--                  <option value="card">Card</option>-->
<!--                  <option value="cheque">Cheque</option>-->
<!--                </select>-->
<!--              </td>-->
<!--              <td class="border p-1">-->
<!--                <input type="text" class="w-full border border-gray-400 p-1" />-->
<!--              </td>-->
<!--              <td class="border p-1">-->
<!--                <input type="text" class="w-full border border-gray-400 p-1" />-->
<!--              </td>-->
<!--              <td class="border p-1">-->
<!--                <input type="text" class="w-full border border-gray-400 p-1" />-->
<!--              </td>-->
<!--              <td class="border p-1">-->
<!--                <input type="date" class="w-full border border-gray-400 p-1" value="2025-05-02" />-->
<!--              </td>-->
<!--              <td class="border p-1">-->
<!--                <input type="text" class="w-full border border-gray-400 p-1" />-->
<!--              </td>-->
<!--              <td class="border p-1 text-center">-->
<!--                <input type="checkbox" class="accent-green-600" />-->
<!--              </td>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--          </table>-->
<!--        </div>-->


        <div class="flex justify-end items-end mt-4 space-x-8 ">
          <div class="space-x-2">
            <button class="bg-gray-200 text-sm font-bold px-3 py-1 mt-1 border border-gray-500 rounded cursor-pointer hover:bg-blue-600 hover:text-white transition duration-200 ">Settle</button>
            <button class="bg-gray-200 text-sm font-bold px-3 py-1 mt-1 border border-gray-500 rounded cursor-pointer hover:bg-red-600 hover:text-white transition duration-200 ">Exit</button>
          </div>
          <div class="grid grid-cols-2 gap-y-2 items-center">
            <label class="text-sm font-bold mx-2">Total Paid</label>
            <input type="text" class="border border-gray-400 bg-white p-1" />

            <label class="text-sm font-bold mx-2">Due Amount</label>
            <input type="text" class="border border-gray-400 bg-white p-1" />
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './credit-settle.component.scss'
})
export class CreditSettleComponent {

}

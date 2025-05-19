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
              <label class="font-bold">Receipt No</label>
              <input type="text" class="w-full bg-white border border-gray-400 p-1" value="PAY00002" />
            </div>

            <div>
              <label class="font-bold">Date</label>
              <input type="date" class="w-full bg-white border border-gray-400 p-1" value="2025-05-02" />
            </div>

            <div>
              <label class="font-bold">Supplier Code</label>
              <input type="text" class="w-full bg-white border border-gray-400 p-1" value="SUP00002" />
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
          <h3 class="text-sm font-bold mb-2">History</h3>
          <table class="w-full text-xs border border-collapse border-gray-600 bg-white">
            <thead class="bg-yellow-300">
            <tr>
              <th class="border p-1">Invoice No</th>
              <th class="border p-1">Inv. Date</th>
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
            <div class="flex items-center space-x-2 ml-auto">
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

          <div>
            <label class="font-bold">Cheque No</label>
            <input type="text" class="w-full bg-white border border-gray-400 p-1" value="CQ00002" />
          </div>

          <div>
            <label class="font-bold">Cheque Date</label>
            <input type="date" class="w-full bg-white border border-gray-400 p-1" value="2025-05-02" />
          </div>

        </div>

        <div class="w-2/3">
<!--          <div class="mb-3">-->
<!--            <table class="w-full text-xs border border-collapse border-gray-600 bg-white">-->
<!--              <thead class="bg-yellow-300">-->
<!--              <tr>-->
<!--                <th class="border p-1">Pay Method</th>-->
<!--                <th class="border p-1">Cheque No / Card No</th>-->
<!--                <th class="border p-1">Description</th>-->
<!--                <th class="border p-1">Date</th>-->
<!--                <th class="border p-1">Amount</th>-->
<!--              </tr>-->
<!--              </thead>-->
<!--              <tbody>-->
<!--              <tr>-->
<!--                <td class="border p-1" colspan="5">-->
<!--                  &lt;!&ndash; Payment rows go here &ndash;&gt;-->
<!--                </td>-->
<!--              </tr>-->
<!--              </tbody>-->
<!--            </table>-->

<!--            <div class="mt-2">-->
<!--              <button class="bg-gray-300 px-3 py-1 font-bold border border-gray-500 rounded hover:bg-gray-400 hover:text-white transition">Remove Row</button>-->
<!--            </div>-->
<!--          </div>-->

          <div class="flex justify-between items-center mt-4 ">
            <div class="grid grid-cols-2 gap-4 items-center">
              <div class="flex items-center space-x-2">
                <label class="font-bold">Due Amount</label>
                <input type="text" class="w-28 border border-gray-400 p-1 text-right bg-white" />
              </div>
<!--              <div class="flex items-center space-x-2">-->
<!--                <label class="font-bold">Total Paid</label>-->
<!--                <input type="text" class="w-28 border border-gray-400 p-1 text-right bg-white" value="0.00" />-->
<!--              </div>-->
            </div>
            <div class="space-x-2">
              <button class="bg-gray-200 text-sm font-bold px-3 py-1 mt-1 border border-gray-500 rounded cursor-pointer hover:bg-blue-600 hover:text-white transition duration-200 ">Save</button>
              <button class="bg-gray-200 text-sm font-bold px-3 py-1 mt-1 border border-gray-500 rounded cursor-pointer hover:bg-yellow-600 hover:text-white transition duration-200 ">Clear</button>
              <button class="bg-gray-200 text-sm font-bold px-3 py-1 mt-1 border border-gray-500 rounded cursor-pointer hover:bg-red-600 hover:text-white transition duration-200 ">Exit</button>
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

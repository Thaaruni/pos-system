import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  standalone: false,
  template: `
    <div class="flex items-center justify-center min-h-screen bg-gray-50">
      <div class="w-full max-w-3xl bg-gradient-to-br from-yellow-100 to-amber-200 p-8 border border-black rounded-lg shadow-lg">
        <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">ORDERS</h1>

        <form class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div class="flex items-center space-x-3">
              <label for="item" class="inline-block font-semibold mb-0 w-24">Item</label>
              <input id="item" type="text" placeholder="Enter item" class="flex-grow border border-gray-300 rounded-lg px-3 py-2" />
            </div>

            <div class="flex items-center space-x-3">
              <label for="itemCode" class="inline-block font-semibold mb-1">Item Code</label>
              <input id="itemCode" type="text" class=" flex-grow w-full p-2 border border-gray-400 "  />
            </div>


            <div class="flex items-center space-x-3">
              <label for="supplier" class="inline-block font-semibold mb-1">Supplier</label>
              <input id="supplier" type="text" class="flex-grow w-full p-2 border border-gray-400 rounded" placeholder="Enter supplier" />
            </div>

            <div class="flex items-center space-x-3">
              <label for="supplierCode" class="inline-block font-semibold mb-1">Supplier Code</label>
              <input id="supplierCode" type="text" class=" flex-grow w-full p-2 border border-gray-400 "  />
            </div>

            <div class="flex items-center space-x-3">
              <label for="orderCode" class="inline-block font-semibold mb-1">Order Code</label>
              <input id="orderCode*" type="text" class="w-full p-2 border border-gray-400 "  />
            </div>


            <div class="flex items-center space-x-3">
              <label for="orderDate" class="inline-block font-semibold mb-1">Order Date</label>
              <input id="orderDate" type="date" class=" flex-grow w-full p-2 border border-gray-400 " />
            </div>

            <div class="flex items-center space-x-3">
              <label for="receiverDate" class="inline-block font-semibold mb-1">Receiver Date</label>
              <input id="receiverDate" type="date" class=" flex-grow w-full p-2 border border-gray-400 " />
            </div>

            <div class="flex items-center space-x-3">
              <label for="qty" class="inline-block font-semibold mb-1">Quantity</label>
              <input id="qty" type="number" class="flex-grow w-full p-2 border border-gray-400 " placeholder="Enter quantity" />
            </div>

            <div class="flex items-center space-x-3">
              <label for="orderPrice" class="inline-block font-semibold mb-1">Order Price</label>
              <input id="orderPrice" type="number" class="flex-grow w-full p-2 border border-gray-400 " placeholder="Enter order price" step="0.01" />
            </div>

          </div>

          <div class="flex justify-center mt-6">
            <button type="submit" class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6  shadow">
              Submit Order
            </button>
          </div>
        </form>

      </div>
    </div>
  `,
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {}

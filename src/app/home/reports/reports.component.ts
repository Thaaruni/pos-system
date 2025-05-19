import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  standalone: false,
  template: `
    <div class="flex items-center justify-center min-h-screen">
      <div class="h-auto md:w-1/2 mx-auto bg-gradient-to-br from-yellow-100 to-amber-200 p-6 border border-black">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">REPORTS & GRAPHS</h1>

        <div class="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div class="space-y-10">
            <button class="report-btn w-full">All Reports</button>
            <button class="report-btn w-full">Invoice</button>
            <button class="report-btn w-full">Credit Invoice</button>
            <button class="report-btn w-full">Credit Settlement</button>
            <button class="report-btn w-full">GRNs</button>
            <button class="report-btn w-full">Transfers</button>
          </div>

          <div class="space-y-10">
            <button class="report-btn w-full">Item</button>
            <button class="report-btn w-full">Customer</button>
            <button class="report-btn w-full">Staff</button>
            <button class="report-btn w-full">Supplier</button>
            <button class="report-btn w-full">Cheques</button>
            <button class="report-btn w-full">Price</button>
          </div>

          <div class="space-y-10">
            <button class="report-btn w-full">Graphs</button>
            <button class="report-btn w-full">Administrator's</button>
            <button class="report-btn w-full">Financial</button>
            <button class="report-btn w-full">My Favourite Reports</button>
          </div>
        </div>

        <div class="mt-10 flex justify-center">
          <input
            type="text"
            placeholder="Search reports..."
            class="border border-gray-300 rounded-lg px-4 py-2 w-1/3 shadow"
          />
        </div>
      </div>
    </div>
  `,
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {

}

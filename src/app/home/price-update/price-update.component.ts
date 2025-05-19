import { Component } from '@angular/core';

@Component({
  selector: 'app-price-update',
  standalone: false,
  template: `
    <div class="p-4 bg-yellow-100 min-h-screen font-sans text-sm">
      <h2 class="text-xl font-bold mb-4">Price Entering</h2>


      <div class="flex border border-black p-4 mb-4">
        <div class="flex flex-col gap-2 w-2/3 pr-4">
          <div class="flex gap-4">
            <div class="w-1/2">
              <label class="block">Name</label>
              <select [(ngModel)]="formData.name" class="w-full border p-2 bg-white">
                <option value="">Select</option>
              </select>
            </div>

            <div class="w-1/2">
              <label class="block">Cost</label>
              <input [(ngModel)]="formData.cost" type="text" class="w-full border p-2 bg-white"/>
            </div>
          </div>

          <div>
            <label class="block">Code</label>
            <select [(ngModel)]="formData.code" class="w-full border p-2 bg-white">
              <option value="">Select</option>
            </select>
          </div>
        </div>
      </div>


      <div class="border border-black p-4 mb-4">
        <h3 class="text-lg font-semibold mb-2">New Price</h3>
        <div class="grid grid-cols-5 gap-2 py-4">
          <div>
            <h4>Marked Price</h4>
            <input [(ngModel)]="formData.markedPrice"  class="border p-2 bg-white"/>
          </div>
          <div>
            <h4>Cash Price</h4>
            <input [(ngModel)]="formData.cashPrice" class="border p-2 bg-white"/>
          </div>
          <div>
            <h4>Credit Price</h4>
            <input [(ngModel)]="formData.creditPrice"  class="border p-2 bg-white"/>
          </div>
          <div>
            <h4>Wholesale</h4>
            <input [(ngModel)]="formData.wholesale"  class="border p-2 bg-white"/>
          </div>
          <div>
            <h4>Maximum Discount</h4>
            <input [(ngModel)]="formData.special"  class="border p-2 bg-white"/>
          </div>

        </div>
        <div class="flex gap-4 py-5">
          <button class="bg-white text-black px-4 py-2 rounded border">Save</button>
          <button (click)="clearForm()" class="bg-white text-black px-4 py-2 rounded border">Clear All</button>
          <button class="bg-white text-black px-4 py-2 rounded border">Exit</button>
        </div>
      </div>
    </div>

  `,
  styleUrl: './price-update.component.scss'
})
export class PriceUpdateComponent {
  formData = {
    group: '',
    name: '',
    code: '',
    cost: '',
    markedPrice: '',
    cashPrice: '',
    creditPrice: '',
    wholesale: '',
    special: '',
    saveAsMultiple: false,

  };

  clearForm() {
    this.formData = {
      group: '',
      name: '',
      code: '',
      cost: '',
      markedPrice: '',
      cashPrice: '',
      creditPrice: '',
      wholesale: '',
      special: '',
      saveAsMultiple: false,
    };
  }
}

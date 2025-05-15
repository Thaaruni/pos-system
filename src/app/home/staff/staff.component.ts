import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  standalone: false,
  template: `
    <div class="min-h-screen bg-blue-100 flex items-center justify-center p-6">

      <div class="w-full max-w-6xl bg-blue-50 border border-blue-400 rounded-md shadow-md p-4 text-sm ">
        <div class="p-4 space-y-4 bg-white rounded shadow text-sm">

          <div class="grid grid-cols-4 gap-4">
            <div>
              <label class="font-bold">Member's Name *</label>
              <input type="text" class="w-full border border-gray-400 p-1" />
            </div>
            <div>
              <label class="font-bold">Designation</label>
              <select class="w-full border border-gray-400 p-1">
                <option>- None -</option>
              </select>
            </div>
            <div>
              <label class="font-bold">Member's Code *</label>
              <input type="text" class="w-full border border-gray-400 p-1" />
            </div>
            <div>
              <label class="font-bold">Group</label>
              <select class="w-full border border-gray-400 p-1">
                <option>- None -</option>
              </select>
            </div>
          </div>

          <!-- Contact Details Tabs -->
          <div class="border border-gray-400 p-2">
            <div class="flex space-x-4 mb-2">
              <span class="font-bold border-b-2 border-black px-2">Contact Details</span>
              <span class="font-bold px-2 text-gray-500">Official Details</span>
              <span class="font-bold px-2 text-gray-500">Personal Details</span>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <h3 class="font-semibold underline mb-1">Permanent Address Details</h3>
                <div class="space-y-1">
                  <input type="text" placeholder="Postal Code" class="w-full border p-1" />
                  <input type="text" placeholder="Address [Line 1]" class="w-full border p-1" />
                  <input type="text" placeholder="Address [Line 2]" class="w-full border p-1" />
                  <input type="text" placeholder="Address [Line 3]" class="w-full border p-1" />
                  <input type="text" placeholder="City" class="w-full border p-1" />
                  <input type="text" placeholder="Telephone" class="w-full border p-1" />
                </div>
              </div>

              <div>
                <h3 class="font-semibold underline mb-1">Current Address Details</h3>
                <div class="space-y-1">
                  <input type="text" placeholder="Postal Code" class="w-full border p-1" />
                  <input type="text" placeholder="Address [Line 1]" class="w-full border p-1" />
                  <input type="text" placeholder="Address [Line 2]" class="w-full border p-1" />
                  <input type="text" placeholder="Address [Line 3]" class="w-full border p-1" />
                  <input type="text" placeholder="City" class="w-full border p-1" />
                  <input type="text" placeholder="Telephone" class="w-full border p-1" />
                </div>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-4 mt-4">
              <input type="text" placeholder="Mobile No" class="w-full border p-1" />
              <input type="email" placeholder="E-mail" class="w-full border p-1" />
              <input type="text" placeholder="Web" class="w-full border p-1" />
            </div>
          </div>

          <div class="grid grid-cols-4 gap-4 items-end">
            <div>
              <label class="font-bold">Date of Recruited</label>
              <input type="date" class="w-full border p-1" value="2025-05-02" />
            </div>
            <div class="flex items-center space-x-2">
              <input type="checkbox" id="resign" />
              <label for="resign" class="font-bold">Resign</label>
            </div>
            <div>
              <label class="font-bold">Date of Resign</label>
              <input type="date" class="w-full border p-1" value="2025-05-02" />
            </div>
            <div>
              <label class="font-bold">Remarks</label>
              <input type="text" class="w-full border p-1" />
            </div>
          </div>
        </div>

        <div class="flex gap-4 mb-4 mt-4">
          <div class="p-2 space-y-2 bg-white rounded shadow text-sm w-1/2">
            <div class="flex justify-around mt-4">
              <div class="space-x-2">
                <button class="px-4 py-1 bg-green-500 text-white rounded">Save</button>
                <button class="px-4 py-1 bg-gray-300 rounded" disabled>Delete</button>
                <button class="px-4 py-1 bg-yellow-300 rounded">Clear All</button>
                <button class="px-4 py-1 bg-red-500 text-white rounded">Exit</button>
              </div>
            </div>
          </div>
          <div class="p-2 space-y-2 bg-white rounded shadow text-sm w-1/2">
            <div class="flex items-center space-x-2">
              <label class="font-bold">Designation</label>
              <select class="border p-1">
                <option>&lt;&lt; All &gt;&gt;</option>
              </select>

              <label class="font-bold">Code</label>
              <input type="text" class="border p-1 w-24" />

              <label class="font-bold">Name</label>
              <input type="text" class="border p-1 w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './staff.component.scss'
})
export class StaffComponent {

}

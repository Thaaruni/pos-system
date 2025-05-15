import { Component } from '@angular/core';

@Component({
  selector: 'app-view-options',
  standalone: false,
  template: `
    <div class="flex flex-col space-y-4 text-sm text-gray-800 bg-yellow-50">
      <label class="flex items-center space-x-2">
        <input type="radio" name="sortOption" class="form-radio text-blue-600" />
        <span>Item Group</span>
      </label>
      <label class="flex items-center space-x-2">
        <input type="radio" name="sortOption" class="form-radio text-blue-600" />
        <span>Default Supplier</span>
      </label>
      <label class="flex items-center space-x-2">
        <input type="radio" name="sortOption" class="form-radio text-blue-600" />
        <span>Sort as Last Entered</span>
      </label>
    </div>
  `,
  styleUrl: './view-options.component.scss'
})
export class ViewOptionsComponent {

}

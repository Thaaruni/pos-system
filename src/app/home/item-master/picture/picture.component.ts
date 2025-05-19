import { Component } from '@angular/core';

@Component({
  selector: 'app-picture',
  standalone: false,
  template: `
    <div class="flex flex-col items-start space-y-4 bg-yellow-50">
      <!-- Select Button -->
      <button class="px-4 py-1 border border-gray-400 rounded bg-gray-100 hover:bg-gray-200 text-sm">
        Select Picture
      </button>

      <!-- Image Preview Box -->
      <div class="w-24 h-24 border border-gray-500 bg-white"></div>

      <!-- Save Button -->
      <button class="px-4 py-1 border border-gray-400 rounded bg-gray-100 hover:bg-gray-200 text-sm">
        Save Picture
      </button>
    </div>
  `,
  styleUrl: './picture.component.scss'
})
export class PictureComponent {

}

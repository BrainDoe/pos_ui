import { Component } from '@angular/core';
import { MultiSelectComponent } from '../../../shared/components/multi-select/multi-select.component';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tests',
  imports: [CommonModule, MultiSelectComponent],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss',
})
export class TestsComponent {
  options = [
    { name: 'Option 1', id: 1 },
    { name: 'Option 2', id: 2 },
    // { name: 'Option 3', id: 3 },
    // { name: 'Option 4', id: 4 },
    // { name: 'Option 5', id: 5 },
    // { name: 'Option 6', id: 6 },
    // { name: 'Option 7', id: 7 },
    // { name: 'Option 8', id: 8 },
    // { name: 'Option 9', id: 9 },
    // { name: 'Option 10', id: 10 },
  ];

  optionFormat = {
    name: 'name',
    value: 'id',
  };

  control = new FormControl('', { nonNullable: true });
}

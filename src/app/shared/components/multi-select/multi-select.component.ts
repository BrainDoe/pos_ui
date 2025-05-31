import { SelectionChange } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-multi-select',
  imports: [
    CommonModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss',
})
export class MultiSelectComponent {
  @Input() label!: string;
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() formcontrol!: FormControl;
  @Input() options!: any[];
  @Input() isCreateRoute!: boolean;
  @Input() selectDriver!: boolean;
  @Input() selectVehicle!: boolean;
  @Input() optionFormat!: any;
  @Output() selectionChange = new EventEmitter<any>();
  @Output() createNewLocation = new EventEmitter<void>();

  onSelectionChange(event: any): void {
    this.selectionChange.emit(event);
  }
}

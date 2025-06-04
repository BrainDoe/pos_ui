import { DatePipe } from '@angular/common';
import { Component, computed, input, output, signal } from '@angular/core';
import { Product } from '../product/product.component';

export interface InvoiceItem extends Pick<Product, '_id' | 'price' | 'name'> {
  quantity: number;
  total: number;
}

@Component({
  selector: 'app-invoice',
  imports: [DatePipe],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss',
})
export class InvoiceComponent {
  invoiceId = signal<string>(`INV-${Math.floor(Math.random() * 1000000)}`);
  invoiceDate = signal<string>(new Date().toLocaleDateString());

  invoiceItems = input.required<InvoiceItem[]>();
  updateQuantity = output<InvoiceItem>();
  removeItem = output<string>();
  clearInvoice = output();

  totalAmount = computed(() =>
    this.invoiceItems().reduce((acc, item) => acc + item.total, 0)
  );

  onUpdateQty(invoiceItem: InvoiceItem) {
    this.updateQuantity.emit(invoiceItem);
  }

  onRemoveItem(itemId: string) {
    this.removeItem.emit(itemId);
  }

  onClearInvoice() {
    this.clearInvoice.emit();
  }

  checkout() {}
}

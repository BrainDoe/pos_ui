import { DatePipe } from '@angular/common';
import {
  Component,
  computed,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import { Product } from '../product/product.component';
import { FormsModule } from '@angular/forms';

export interface InvoiceItem extends Pick<Product, '_id' | 'price' | 'name'> {
  quantity: number;
  total: number;
}

@Component({
  selector: 'app-invoice',
  imports: [DatePipe, FormsModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss',
})
export class InvoiceComponent {
  invoiceId = signal<string>(`INV-${Math.floor(Math.random() * 1000000)}`);
  invoiceDate = signal<string>(new Date().toLocaleDateString());
  paymentMethods = [
    { label: 'Cash', value: 'Cash' },
    { label: 'Card', value: 'Card' },
    { label: 'Bank Transfer', value: 'Bank Transfer' },
  ];
  selectedPaymentMethod = model<string>('Cash');
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
    this.invoiceId.set('');
    this.invoiceDate.set('');
  }

  checkout() {
    console.log({
      product: this.invoiceItems(),
      totalAmount: this.totalAmount(),
      paymentMethod: this.selectedPaymentMethod(),
      invoiceId: this.invoiceId(),
      invoiceDate: this.invoiceDate(),
    });
  }
}

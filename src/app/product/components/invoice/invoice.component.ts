import { DatePipe } from '@angular/common';
import {
  Component,
  computed,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvoiceItem } from '../../../core/services/product.service';

@Component({
  selector: 'app-invoice',
  imports: [DatePipe, FormsModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss',
})
export class InvoiceComponent {
  invoiceId = signal<string>(`INV-${Math.floor(Math.random() * 1000000)}`);
  invoiceDate = signal<string>(new Date().toLocaleDateString());
  paymentMethods = signal<{ label: string; value: string }[]>([
    { label: 'Cash', value: 'Cash' },
    { label: 'Card', value: 'Card' },
    { label: 'Bank Transfer', value: 'Bank Transfer' },
  ]);
  selectedPaymentMethod = model<string>('');
  invoiceItems = input.required<InvoiceItem[]>();
  updateQuantity = output<{
    item: InvoiceItem;
    type: 'increase' | 'decrease';
  }>();
  removeItem = output<string>();
  clearInvoice = output();

  totalAmount = computed(() =>
    this.invoiceItems().reduce((acc, item) => acc + item.total, 0)
  );

  onUpdateQty(invoiceItem: InvoiceItem, type: 'increase' | 'decrease') {
    this.updateQuantity.emit({ item: invoiceItem, type });
  }

  generateQuantityArray(maxQuantity: number) {
    return Array.from({ length: maxQuantity }, (_, i) => i + 1);
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

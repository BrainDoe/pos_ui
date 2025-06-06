import { Component, model, signal, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  InvoiceItem,
  ProductService,
} from '../../../core/services/product.service';

@Component({
  selector: 'app-invoice',
  imports: [DatePipe, FormsModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss',
})
export class InvoiceComponent {
  productService = inject(ProductService);
  invoiceId = signal<string>(`INV-${Math.floor(Math.random() * 1000000)}`);
  invoiceDate = signal<string>(new Date().toLocaleDateString());
  paymentMethods = this.productService.paymentMethods;
  selectedPaymentMethod = model<string>('');
  invoiceItems = this.productService.invoiceItems;

  totalAmount = this.productService.totalAmount;
  count = this.productService.invoiceItemCount;

  updateQty(invoiceItem: InvoiceItem, type: 'increase' | 'decrease') {
    this.productService.updateQuantity({ invoiceItem, type });
  }

  removeItem(itemId: string) {
    this.productService.removeItem(itemId);
  }

  clearInvoice() {
    this.productService.clearInvoice();
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

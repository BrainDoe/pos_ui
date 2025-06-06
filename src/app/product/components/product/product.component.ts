import { Component, input, output } from '@angular/core';
import { InvoiceItem, Product } from '../../../core/services/product.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  invoiceProduct = output<InvoiceItem>();
  product = input.required<Product>();

  sendToInvoice(product: Product) {
    this.invoiceProduct.emit({
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
      total: product.price,
    });
  }
}

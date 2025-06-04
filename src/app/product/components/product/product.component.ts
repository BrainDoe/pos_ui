import { Component, input, output } from '@angular/core';
import { InvoiceItem } from '../invoice/invoice.component';

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  costPrice: number;
  discountedPrice: number;
  minQuantity: number;
  isActive: boolean;
  isFeatured: boolean;
  images: string[];
  discountPercentage: number;
  stock: number;
  barcode: string;
  category: {
    _id: string;
    name: string;
    description: string;
  } | null;
  createdAt: string;
  updatedAt: string;
}
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

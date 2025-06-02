import { Component, input } from '@angular/core';

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
  product = input.required<Product>();

  sendToInvoice(product: Product) {
    // Logic to send product to invoice
    console.log('Product sent to invoice:', product);
  }
}

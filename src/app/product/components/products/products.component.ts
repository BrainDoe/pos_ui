import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { InvoiceComponent } from '../invoice/invoice.component';

@Component({
  selector: 'app-products',
  imports: [ProductComponent, InvoiceComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products = [
    {
      _id: '6839878988c00a3f82b6192d',
      name: 'Cucumber',
      description: 'Cucumber',
      price: 50,
      costPrice: 35,
      discountedPrice: 0,
      minQuantity: 10,
      isActive: true,
      isFeatured: true,
      images: [
        'https://res.cloudinary.com/dur8zyxon/image/upload/v1748600713/product-pos/brybnpp2kcmfsw5nvewn.jpg',
      ],
      discountPercentage: 0,
      stock: 100,
      barcode: '1748600622296',
      category: null,
      createdAt: '2025-05-30T10:25:13.657Z',
      updatedAt: '2025-05-30T10:25:13.657Z',
    },
    {
      _id: '68382ef286a84126a2b9b92e',
      name: 'Avacado',
      description: 'Avacado fruits',
      price: 50,
      costPrice: 35,
      discountedPrice: 0,
      minQuantity: 5,
      isActive: true,
      isFeatured: true,
      images: [
        'https://res.cloudinary.com/dur8zyxon/image/upload/v1748600713/product-pos/brybnpp2kcmfsw5nvewn.jpg',
      ],
      discountPercentage: 0,
      stock: 100,
      barcode: '1748512449428',
      category: {
        _id: '68374f35a8fe832d3008f854',
        name: 'Fruits',
        description: 'Edible fruits',
      },
      createdAt: '2025-05-29T09:54:58.108Z',
      updatedAt: '2025-05-29T09:54:58.108Z',
    },
    {
      barcode: '1748869931780',
      _id: '68382975bd37656c0c04e109',
      name: 'Strawberry',
      description: 'Strawberry fruits',
      price: 50,
      costPrice: 35,
      discountedPrice: 0,
      minQuantity: 5,
      isActive: true,
      isFeatured: true,
      images: [
        'https://res.cloudinary.com/dur8zyxon/image/upload/v1748600713/product-pos/brybnpp2kcmfsw5nvewn.jpg',
      ],
      discountPercentage: 0,
      stock: 100,
      category: {
        _id: '68374f35a8fe832d3008f854',
        name: 'Fruits',
        description: 'Edible fruits',
      },
      createdAt: '2025-05-29T09:31:33.664Z',
      updatedAt: '2025-05-29T09:31:33.664Z',
    },
    {
      _id: '68382ef286a84126a2b9b92e',
      name: 'Avacado',
      description: 'Avacado fruits',
      price: 50,
      costPrice: 35,
      discountedPrice: 0,
      minQuantity: 5,
      isActive: true,
      isFeatured: true,
      images: [
        'https://res.cloudinary.com/dur8zyxon/image/upload/v1748600713/product-pos/brybnpp2kcmfsw5nvewn.jpg',
      ],
      discountPercentage: 0,
      stock: 100,
      barcode: '1748512449428',
      category: {
        _id: '68374f35a8fe832d3008f854',
        name: 'Fruits',
        description: 'Edible fruits',
      },
      createdAt: '2025-05-29T09:54:58.108Z',
      updatedAt: '2025-05-29T09:54:58.108Z',
    },
    {
      barcode: '1748869931780',
      _id: '68382975bd37656c0c04e109',
      name: 'Strawberry',
      description: 'Strawberry fruits',
      price: 50,
      costPrice: 35,
      discountedPrice: 0,
      minQuantity: 5,
      isActive: true,
      isFeatured: true,
      images: [
        'https://res.cloudinary.com/dur8zyxon/image/upload/v1748600713/product-pos/brybnpp2kcmfsw5nvewn.jpg',
      ],
      discountPercentage: 0,
      stock: 100,
      category: {
        _id: '68374f35a8fe832d3008f854',
        name: 'Fruits',
        description: 'Edible fruits',
      },
      createdAt: '2025-05-29T09:31:33.664Z',
      updatedAt: '2025-05-29T09:31:33.664Z',
    },
    {
      _id: '68382ef286a84126a2b9b92e',
      name: 'Avacado',
      description: 'Avacado fruits',
      price: 50,
      costPrice: 35,
      discountedPrice: 0,
      minQuantity: 5,
      isActive: true,
      isFeatured: true,
      images: [
        'https://res.cloudinary.com/dur8zyxon/image/upload/v1748600713/product-pos/brybnpp2kcmfsw5nvewn.jpg',
      ],
      discountPercentage: 0,
      stock: 100,
      barcode: '1748512449428',
      category: {
        _id: '68374f35a8fe832d3008f854',
        name: 'Fruits',
        description: 'Edible fruits',
      },
      createdAt: '2025-05-29T09:54:58.108Z',
      updatedAt: '2025-05-29T09:54:58.108Z',
    },
    {
      barcode: '1748869931780',
      _id: '68382975bd37656c0c04e109',
      name: 'Strawberry',
      description: 'Strawberry fruits',
      price: 50,
      costPrice: 35,
      discountedPrice: 0,
      minQuantity: 5,
      isActive: true,
      isFeatured: true,
      images: [
        'https://res.cloudinary.com/dur8zyxon/image/upload/v1748600713/product-pos/brybnpp2kcmfsw5nvewn.jpg',
      ],
      discountPercentage: 0,
      stock: 100,
      category: {
        _id: '68374f35a8fe832d3008f854',
        name: 'Fruits',
        description: 'Edible fruits',
      },
      createdAt: '2025-05-29T09:31:33.664Z',
      updatedAt: '2025-05-29T09:31:33.664Z',
    },
  ];

  sendToInvoice(product: object) {
    // Logic to send the product to the invoice
    console.log('Product sent to invoice:', product);
  }
}

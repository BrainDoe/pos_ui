import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { InvoiceComponent, InvoiceItem } from '../invoice/invoice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [ProductComponent, InvoiceComponent, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  invoiceOpened = signal<boolean>(false);
  invoiceItems = signal<InvoiceItem[]>([]);
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
      barcode: '1748869931780',
      _id: 'adfafasdfa',
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
      barcode: 'lk;jhjkasdf',
      _id: 'adfafasdfa',
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
      barcode: 'ertyerys',
      _id: 'adfafasdfa',
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
  searchTerm = signal<string>('');

  handleAddToInvoice(item: InvoiceItem) {
    this.invoiceOpened.set(true);

    const existingItem = this.invoiceItems().find((i) => i._id === item._id);
    if (existingItem) {
      // If item already exists, update its quantity and total
      this.invoiceItems.update((items) =>
        items.map((i) =>
          i._id === item._id
            ? {
                ...i,
                quantity: i.quantity + 1,
                total: (i.quantity + 1) * i.price,
              }
            : i
        )
      );
    } else {
      this.invoiceItems.update((items) => [...items, item]);
    }
  }

  updateQty(invoiceItem: any) {
    this.invoiceItems.update((items) =>
      items.map((item) =>
        item._id === invoiceItem._id
          ? {
              ...item,
              quantity: invoiceItem.quantity,
              total: invoiceItem.quantity * (item.price || 0),
            }
          : item
      )
    );
  }

  removeItem(itemId: string) {
    this.invoiceItems.update((items) =>
      items.filter((item) => item._id !== itemId)
    );
  }

  searchProducts() {
    const term = this.searchTerm().toLowerCase();
    if (term && term.length < 3) {
      console.log(term);
      const filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(term)
      );

      this.products = filteredProducts;
      return this.products;
    }
    return this.products;
  }

  clearInvoice() {
    this.invoiceItems.set([]);
    this.invoiceOpened.set(false);
  }
}

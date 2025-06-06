import { JsonPipe } from '@angular/common';
import {
  Component,
  effect,
  inject,
  OnInit,
  resource,
  ResourceLoaderParams,
  signal,
} from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { InvoiceComponent } from '../invoice/invoice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  InvoiceItem,
  Product,
  ProductService,
} from '../../../core/services/product.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ResourceStatus } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [
    ProductComponent,
    InvoiceComponent,
    FormsModule,
    MatProgressSpinner,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  productService = inject(ProductService);

  invoiceOpened = signal<boolean>(false);
  invoiceItems = this.productService.invoiceItems;
  products = signal<Product[] | undefined>([
    // {
    //   _id: '6839878988c00a3f82b6192d',
    //   name: 'Cucumber',
    //   description: 'Cucumber',
    //   price: 50,
    //   costPrice: 35,
    //   discountedPrice: 0,
    //   minQuantity: 10,
    //   isActive: true,
    //   isFeatured: true,
    //   images: [
    //     'https://res.cloudinary.com/dur8zyxon/image/upload/v1748600713/product-pos/brybnpp2kcmfsw5nvewn.jpg',
    //   ],
    //   discountPercentage: 0,
    //   stock: 100,
    //   barcode: '1748600622296',
    //   category: null,
    //   createdAt: '2025-05-30T10:25:13.657Z',
    //   updatedAt: '2025-05-30T10:25:13.657Z',
    // },
  ]);
  loading = signal<boolean>(false);
  error = signal<any>(null);
  searchTerm = signal<string>('');

  productResource = resource<Product[], string>({
    request: this.searchTerm,
    loader: (params) =>
      this.productService
        .getProductsList(params.request)
        .then(({ data }) => data.items),
  });

  handleAddToInvoice(item: InvoiceItem) {
    this.invoiceOpened.set(true);

    this.productService.addToInvoice(item);
  }

  updateQty(invoiceItem: { item: InvoiceItem; type: 'increase' | 'decrease' }) {
    this.productService.updateQuantity({
      invoiceItem: invoiceItem.item,
      type: invoiceItem.type,
    });
  }

  removeItem(itemId: string) {
    this.productService.removeItem(itemId);
  }

  searchProducts() {
    const term = this.searchTerm().toLowerCase();
    if (term && term.length < 3) {
      return this.productResource
        .value()!
        .filter((product) => product.name.toLowerCase().includes(term));
      // this.searchTerm.set('');
      // return this.productResource.value();
      // return this.products;
    }
    this.searchTerm.set('');

    return this.productResource.value();
  }

  clearInvoice() {
    this.invoiceOpened.set(false);
    this.productService.clearInvoice();
  }
}

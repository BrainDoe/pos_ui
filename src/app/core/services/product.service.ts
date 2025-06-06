import {
  computed,
  Injectable,
  Resource,
  resource,
  Signal,
  signal,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly baseUrl = 'https://pos-api-qldm.onrender.com/api/v1/products';

  // Signal to store the invoice items
  private _invoiceItems = signal<InvoiceItem[]>([]);

  // Computed signal for the total amount
  totalAmount = computed(() =>
    this._invoiceItems().reduce((acc, item) => acc + item.total, 0)
  );

  // Computed signal for invoice item count
  invoiceItemCount = computed(() => this._invoiceItems().length);

  paymentMethods = signal<{ label: string; value: string }[]>([
    { label: 'Cash', value: 'Cash' },
    { label: 'Card', value: 'Card' },
    { label: 'Bank Transfer', value: 'Bank Transfer' },
  ]);

  // Expose the invoice items as a readonly signal
  get invoiceItems() {
    return this._invoiceItems.asReadonly();
  }

  // Add an item to the invoice
  addToInvoice(item: InvoiceItem) {
    const existingItem = this._invoiceItems().find((i) => i._id === item._id);
    if (existingItem) {
      this._invoiceItems.update((items) =>
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
      this._invoiceItems.update((items) => [...items, item]);
    }
  }

  // Update the quantity of an item
  updateQuantity({
    invoiceItem,
    type,
  }: {
    invoiceItem: InvoiceItem;
    type: 'increase' | 'decrease';
  }) {
    this._invoiceItems.update((items) =>
      items.map((item) =>
        item._id === invoiceItem._id
          ? {
              ...item,
              quantity:
                type === 'increase'
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
              total:
                (type === 'increase'
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1)) * item.price,
            }
          : item
      )
    );
  }

  // Remove an item from the invoice
  removeItem(itemId: string) {
    this._invoiceItems.update((items) =>
      items.filter((item) => item._id !== itemId)
    );
  }

  // Clear the invoice
  clearInvoice() {
    this._invoiceItems.set([]);
  }

  productResource(searchTerm: Signal<string>): Resource<Product[] | undefined> {
    return resource<Product[], string>({
      request: searchTerm,
      loader: (params) => this.fetchProducts(params.request),
    });
  }

  // Fetch products from the API
  async fetchProducts(searchTerm: string): Promise<Product[]> {
    const response = await fetch(`${this.baseUrl}/?search=${searchTerm}`);
    const data = await response.json();
    return data.items;
  }

  getProductsList(search: string = '') {
    return fetch(`${this.baseUrl}/?search=${search}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }
}

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

export interface InvoiceItem extends Pick<Product, '_id' | 'price' | 'name'> {
  quantity: number;
  total: number;
}

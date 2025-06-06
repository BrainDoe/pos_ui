import { Injectable, resource, signal } from '@angular/core';
import { Product } from '../../product/components/product/product.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly baseUrl = 'https://pos-api-qldm.onrender.com/api/v1/products';

  getProductsList(search: string = '') {
    return fetch(`${this.baseUrl}/?search=${search}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }
}

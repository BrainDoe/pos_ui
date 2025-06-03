import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-invoice',
  imports: [DatePipe],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss',
})
export class InvoiceComponent {
  invoiceId: string = `INV-${Math.floor(Math.random() * 1000000)}`;
  invoiceDate = new Date().toLocaleDateString();

  invoiceItems = [
    {
      name: 'Product 1',
      quantity: 2,
      price: 100,
      total: 200,
      id: 1,
    },
    {
      name: 'Product 2',
      quantity: 1,
      price: 150,
      total: 150,
      id: 2,
    },
    {
      name: 'Product 3',
      quantity: 3,
      price: 50,
      total: 150,
      id: 3,
    },
  ];

  totalAmount = this.invoiceItems.reduce((acc, item) => acc + item.total, 0);

  removeItem(itemId: number) {
    this.invoiceItems = this.invoiceItems.filter((item) => item.id !== itemId);
    this.totalAmount = this.invoiceItems.reduce(
      (acc, item) => acc + item.total,
      0
    );
  }

  increaseQuantity(itemId: number) {
    const item = this.invoiceItems.find((item) => item.id === itemId);
    if (item) {
      item.quantity++;
      item.total = item.quantity * item.price;
      this.totalAmount = this.invoiceItems.reduce(
        (acc, item) => acc + item.total,
        0
      );
    }
  }

  decreaseQuantity(itemId: number) {
    const item = this.invoiceItems.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      item.quantity--;
      item.total = item.quantity * item.price;
      this.totalAmount = this.invoiceItems.reduce(
        (acc, item) => acc + item.total,
        0
      );
    }
  }

  checkout() {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Invoice</title>
            <style>
              body { font-family: Arial, sans-serif; }
              .invoice { max-width: 600px; margin: auto; }
              .invoice-header { text-align: center; margin-bottom: 20px; }
              .invoice-header h1 { margin: 0; }
              .invoice-header p { margin: 5px 0; }
              .invoice-items { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
              .invoice-items th, .invoice-items td { border: 1px solid #ddd; padding: 8px; text-align: center; }
              .invoice-items th { background-color: #f2f2f2; }
              .invoice-total { text-align: right; font-weight: bold; }
              .invoice-footer { text-align: center; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="invoice">
              <div class="invoice-header">
                <h1>Invoice #${this.invoiceId}</h1>
                <p>Date: ${this.invoiceDate}</p>
              </div>
              <table class="invoice-items">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${this.invoiceItems
                    .map(
                      (item) => `
                    <tr>
                      <td>${item.name}</td>
                      <td>${item.quantity}</td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>${item.total.toFixed(2)}</td>
                    </tr>`
                    )
                    .join('')}
                </tbody>
              </table>
              <div class="invoice-total">
                Total Amount: $${this.totalAmount.toFixed(2)}
              </div>
              <div class="invoice-footer">
                Thank you for your business!
              </div>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
      printWindow.close();
    }
  }

  clearInvoice() {
    this.invoiceItems = [];
  }
}

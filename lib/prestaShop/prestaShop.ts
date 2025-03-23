import { AxiosInstance } from 'axios';

import { Client, ClientConfig } from './client';
import { Customers } from './modules/customers';

export class PrestaShop {
  public client: AxiosInstance;
  public customers: Customers;

  constructor(config: ClientConfig) {
    this.client = new Client(config).getInstance();
    this.customers = new Customers(this.client);
  }
}

import { AxiosInstance } from 'axios';
import { Builder } from 'xml2js';

import { readCustomerMapper } from './mappers/readCustomerMapper';
import { Customer, MutateCustomerArgs } from './types/customer.types';

export class Customers {
  private readonly basePath: string = '/customers';
  private readonly client: AxiosInstance;
  private readonly builder: Builder;

  constructor(clientInstance: AxiosInstance) {
    this.client = clientInstance;
    this.builder = new Builder();
  }

  // GET /customers/:id
  async getById(id: string): Promise<Customer> {
    const res = await this.client.get(`${this.basePath}/${id}`);

    return readCustomerMapper(res.data.customer);
  }

  // GET /customers
  async getAll({
    filter,
  }: {
    filter?: { email?: string[] };
  }): Promise<Customer[]> {
    const res = await this.client.get(`${this.basePath}`, {
      params: { filter },
    });

    return res.data.customers;
  }

  // POST /customers
  async create(customerData: MutateCustomerArgs): Promise<Customer> {
    const xml = this.builder.buildObject({
      prestashop: {
        customer: customerData,
      },
    });

    const res = await this.client.post(`${this.basePath}`, xml, {
      headers: { 'Content-Type': 'text/xml' },
    });

    return readCustomerMapper(res.data.customer);
  }

  // PUT /customers/:id (requires XML)
  async updateById(id: string, customerData: MutateCustomerArgs) {
    const xml = this.builder.buildObject({
      prestashop: {
        customer: {
          id,
          ...customerData,
        },
      },
    });

    const res = await this.client.put(`${this.basePath}/${id}`, xml, {
      headers: { 'Content-Type': 'text/xml' },
    });

    return res.data;
  }

  // DELETE /customers/:id
  async deleteById(id: string) {
    const res = await this.client.delete(`${this.basePath}/${id}`);

    return res.status === 200;
  }
}

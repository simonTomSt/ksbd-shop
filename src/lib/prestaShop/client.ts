import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';

export type ClientConfig = CreateAxiosDefaults & {
  apiKey: string;
};

export class Client {
  private instance: AxiosInstance;

  constructor(config: ClientConfig) {
    const defaultParams = {
      ws_key: config.apiKey,
      io_format: 'JSON',
      display: 'full',
    };

    this.instance = axios.create({
      ...config,
      auth: {
        username: config.apiKey,
        password: '',
      },
      params: {
        ...config.params,
        ...defaultParams,
      },
    });
  }

  public getInstance(): AxiosInstance {
    return this.instance;
  }
}

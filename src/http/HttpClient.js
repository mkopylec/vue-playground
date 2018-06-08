import axios from 'axios';

class HttpClient {

  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:8081/'
    });
  }

  getMessage() {
    return this.client.get('/message')
  }
}

export const http = new HttpClient();

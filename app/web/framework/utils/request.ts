import axios from 'axios'
import qs from 'querystring'
import { getCookie } from './util'
interface RequestOptions<T> {
    method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'OPTIONS';
    data?: T;
    url: string;
    [index: string]: any;
}
interface ResponseOptions<S> {
    code: string | number;
    data: S;
    msg?: string;
    [index: string]: any;
}

class Request {
  private origin=''
  public setOrigin (host:string) {
    this.origin = host
  }
  public async fetch<S> (options: RequestOptions<any>): Promise<ResponseOptions<S>> {
    const csrfToken = getCookie('csrfToken')
    const instance = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': csrfToken,
        ...options.headers
      },
      timeout: 30 * 1000,
      baseURL: this.origin
    })
    const res = await instance.request(options)
    const isOk = res.status < 400 && res.data && res.data.code === 0
    if (!isOk) {
      throw res.data
    }
    return res.data
  }

  public getData<S> (url: string, data?: any, headers?: any): Promise<ResponseOptions<S>> {
    return this.fetch<S>({ method: 'GET', url: `${url}?${qs.stringify(data)}`, headers })
  }

  public postData<S> (url: string, data?: any): Promise<ResponseOptions<S>> {
    return this.fetch<S>({ method: 'POST', url, data })
  }
}

export default new Request()

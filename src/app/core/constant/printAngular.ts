export const propPipe =
`import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prop'
})
export class PropPipe implements PipeTransform {
  
  //filter a list of objects by an expected value for a given property
  transform(items: Array<any>, prop: string, val: any): Array<any> {
    if (!items) return
    else return items.filter(item => item[prop] === val);
  }
}`

export const splitPipe =
`import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {
  transform(item: string, char: string, i: number): string {
    if (!item) return ''
    else return item.split(char)[i]
  }
}`

export const genericEndpoints =
`import { environment } from './../../../environments/environment'
import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class GenericEndpoints<T> {

  public headers = new Headers({ 'Content-Type': 'application/json' })
  private clas: T
  public model: string

  constructor(public http: Http, clas: T) {
    this.clas = clas
    let this.model = '/' + this.clas.constructor.name.toString().toLowerCase()
  }

  findById(id): Promise<T> {
    return this.http.get(environment.apiBaseUrl + this.model + '/search/findById?id=' + id)
      .toPromise()
      .then(response => response.json() as T)
      .catch(this.handleError)
  }

  delete(id: number): Promise<void> {
    return this.http.delete(environment.apiBaseUrl + this.model + '/' + id, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }

  create(model: T): Promise<T> {
    return this.http
      .post(environment.apiBaseUrl + this.model, JSON.stringify(model), { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  update(model: T): Promise<T> {
    return this.http
      .put(environment.apiBaseUrl + this.model + '/' + model['id'], JSON.stringify(model), { headers: this.headers })
      .toPromise()
      .then(() => model)
      .catch(this.handleError)
  }

  public handleError(error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }
}`

export const genericEndpointsConstructor =
`  constructor(public http: HttpClient) {
  super(http, new User)
}`
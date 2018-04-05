import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { Address, AutoCompleteAddress, SmartyAutoCompleteResponse } from '../model/address'
import { environment } from './../../../environments/environment'
import { brand } from './../model/constant'
import { ConfigService } from './config.service'

@Injectable()
export class AddressService {
  // because the key is whitelisted by the caller's URL and uglified
  readonly key = 'notTheRealKey'

  //if address has an addressId then it is a valid address
  address: Observable<Address> = Observable.of({} as Address)

  constructor(private http: HttpClient, private config: ConfigService) {}

  getAddress(address: Address): Observable<Address[]> {
    const url = '/rest/model/ahs/services/rest/AHSRestActor/validateAddress'

    let body = this.config.newBody()
    body.json = address
    body.json.brand = brand

    return this.http
      .post<any>(environment.domain + url, body)
      .map(r => r.data)
      .catch(this.config.handleError)
  }

  autocomplete(address: Partial<Address>): Observable<AutoCompleteAddress[]> {
    const url = 'https://us-autocomplete.api.smartystreets.com/suggest'
    
    return this.http
      .get<SmartyAutoCompleteResponse>(url, {
        params: new HttpParams().set('prefix', address.address1).set('auth-id', this.key)
      })
      .map(s => s.suggestions)
      .catch(this.config.handleError)
  }
}

import { Injectable } from '@angular/core';
import {Office} from '../interfaces/office';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.prod';
import {defaultIfEmpty, filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OfficeService {
  private readonly _backendURL: any;
  // liste des bureaux
  // private _office: Office[];

  constructor(private _http: HttpClient) {
    // this._office = OFFICES;
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);

  }

  /**
   * renvoit la liste des bureaux
   */
  fecth(): Observable<Office[]> {
    return this._http.get<Office[]>(this._backendURL.allOffice)
        .pipe(
            filter(_ => !!_),
            defaultIfEmpty([]),
        );
  }

  /**
   *
   * @param files
   */
  import(files: any[]): Observable<any> {
      const formData = new FormData();
      formData.append('file', files[0]);
      return  this._http.post( this._backendURL.importOffice, formData);
  }

  /**
   *
   * @param office
   */
  updateCapacity(office: Office) {
    return  this._http.put<Office>(this._backendURL.updateCapacity, office);
  }
  // /**
  //  *
  //  * @param files
  //  */
  // importDefault(): Observable<any> {
  //   return  this._http.get( this._backendURL.importOffice);
  // }
  //
  // /**
  //  * Function to return request options
  //  */
  // private _options(headerList: object = {}): any {
  //   return { headers: new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList)) };
  // }
}

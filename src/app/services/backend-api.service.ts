import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private httpClient: HttpClient) { }


  getData(uri: string,paramsobj?): Observable<any> {
      let params = new HttpParams();
    if (!!paramsobj){
    for (let key in paramsobj) {
      params = params.append(key, paramsobj[key]);

    }
  }
    return this.httpClient.get(uri, { params: params });
  }
  //     if (!!paramsobj.launch_success){
  //     params = params.append('launch_success', paramsobj.launch_success);
  //   }
  //     if (!!paramsobj.land_success){
  //     params = params.append('land_success', paramsobj.land_success);
  //   }
  //   if (!!paramsobj.launch_year.length) {
  //     let params = new HttpParams();
  //     params = params.append('launch_year', paramsobj.launch_year);
  //   }
  //     return this.httpClient.get(uri, { params: params });
  // } else {
  //     return this.httpClient.get(uri);
  // }
   

    // getData(uri: string, paramsobj ?): Observable <any> {
    //       if (!!paramsobj.launch_success) {
    //         uri = uri + '&' + 'launch_success' + '=' + paramsobj.launch_success;
    //        }
    //       if (!!paramsobj.land_success) {
    //         uri = uri + '&' + 'land_success' + '=' + paramsobj.land_success;
    //       }
    //       if (!!paramsobj.launch_year) {
    //         uri = uri + '&' + 'launch_year' + '=' + paramsobj.launch_year;
    //       }
    //       return this.httpClient.get(uri);
    //     } 

      }
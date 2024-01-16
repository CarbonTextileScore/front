import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from 'src/environments/config';

/**
 * @class HttpRequestInterceptor
 * Inspect and transform the HTTP requests before they are sent to the server.
 * We are adding 'withCredentials:true' so that the browser includes Cookie on the Request header
 */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': config.prod_api,
      'Access-Control-Allow-Headers': 'Content-Type,Authorization',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    const reqWithToken = req.clone({headers});
    return next.handle(reqWithToken);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];

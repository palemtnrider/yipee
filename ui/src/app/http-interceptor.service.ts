import {Injectable} from '@angular/core';
import { HttpBackend, HttpRequest, HttpResponse, HttpClient, HttpHeaders, HttpEvent, HttpParams, HttpInterceptor, HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    orgHeaderId = '';
    intercept(req: HttpRequest<any>, next: HttpHandler):
      Observable<HttpEvent<any>> {
        const yipeeReq = req.clone({ setHeaders: {'Content-type': 'application/json',
                                                  'x-yipeeio-context': this.orgHeaderId}});
        return next.handle(yipeeReq);
      }

    // constructor(backend: HttpBackend, defaultOptions: { headers?: HttpHeaders, params?: HttpParams}) {
    //     super(backend);
    // }

    // request(url: string, options?: {headers:HttpHeaders, params:HttpParams}): Observable<Object> {
    //     return super.request(url, options);
    // }

    // get(url: string, options?: {headers?:HttpHeaders, params?:HttpParams}): Observable<Object> {
    //     return super.get(url, this.getRequestOptionArgs(options));
    // }

    // post(url: string, body: string, options?: {headers?:HttpHeaders, params?:HttpParams}): Observable<Object> {
    //     return super.post(url, body, this.getRequestOptionArgs(options));
    // }

    // put(url: string, body: string, options?: {headers?:HttpHeaders, params?:HttpParams}): Observable<Object> {
    //     return super.put(url, body, this.getRequestOptionArgs(options));
    // }

    // delete(url: string, options?: {headers?:HttpHeaders, params?:HttpParams}): Observable<Object> {
    //     return super.delete(url, this.getRequestOptionArgs(options));
    // }

    // options(url: string, options?: {headers?:HttpHeaders, params?:HttpParams}): Observable<Object> {
    //     // if (options === 'CHANGE_ORG_HEADER') {
    //     //     this.orgHeaderId = url;

    //     //     return;
    //     // } else {
    //         return super.options(url, this.getRequestOptionArgs(options));
    //     // }
    // }

    private getRequestOptionArgs(options?: {headers?: HttpHeaders, params?: HttpParams}): {headers?: HttpHeaders, params?: HttpParams} {
        if (options == null) {
            options = {headers: new HttpHeaders};
        }
        if (options.headers == null) {
            options.headers = new HttpHeaders();
        }
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('x-yipeeio-context', this.orgHeaderId);

        return options;
    }
}

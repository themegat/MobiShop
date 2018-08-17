import { Injectable} from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '../../node_modules/@angular/common/http';
import { Observable } from 'rxjs';


export class RequestInterceptor implements HttpInterceptor {
    intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted request', req);
        return next.handle(req);
    }
}
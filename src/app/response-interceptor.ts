import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { _throw } from 'rxjs/observable/throw';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse) => {
                console.log('Server error', err);
                return _throw(err);
            })
        );
    }
}
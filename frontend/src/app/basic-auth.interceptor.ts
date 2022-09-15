import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('basic auth interceptor')
    request = request.clone({
      setHeaders: {
        Authorization: `Basic ${btoa('kasparno:repsak90')}`
      }
    })
    return next.handle(request);
  }
}

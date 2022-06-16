import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor() {}
  private cache: Map<HttpRequest<any>, HttpResponse<any>> = new Map();

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (req.url.includes('www.googleapis.com')) {
      return next.handle(req);
    } else {
      return next.handle(req);
    }
  }
}

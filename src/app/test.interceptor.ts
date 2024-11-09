import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

// export const testInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next:
//   HttpHandlerFn) : Observable<HttpEvent<unknown>>  => {
//     console.log(req);
//     return next(req);
//   };

  export function testInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    console.log(req.url);
    return next(req);
  }
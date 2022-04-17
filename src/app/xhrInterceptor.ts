import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = 'secure-user-token';
    const modifiedReq = req.clone({
      headers: new HttpHeaders().append('Authorization', `Bearer ${userToken}`)
        .append('Access-Control-Allow-Origin', '*')
        .append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    });

    console.log(req.headers);
    console.log(modifiedReq.headers);
    return next.handle(modifiedReq);
  }
}

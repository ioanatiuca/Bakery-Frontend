import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { LoginService } from './login.service';

@Injectable({providedIn: 'root'})
export class XhrInterceptor implements HttpInterceptor {

  constructor(public loginService: LoginService) {}

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const userToken = 'secure-user-token';
  //   const modifiedReq = req.clone({
  //     headers: new HttpHeaders().append('Authorization', `Bearer ${userToken}`)
  //       .append('Access-Control-Allow-Origin', '*')
  //       .append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  //   });
  //
  //   console.log(req.headers);
  //   console.log(modifiedReq.headers);
  //   return next.handle(modifiedReq);
  // }


  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
      req = req.clone({
        setHeaders: {
          'Authorization': 'Bearer'+ sessionStorage.getItem('basicauth'),
          'Access-Control-Allow-Origin': 'https://localhost:8080/**',
          'Accept': '*/*'
        }
      })
    }

    return next.handle(req);

  }
}

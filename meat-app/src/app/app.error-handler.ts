import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';

export class ErrorHandler {
  static handleError(error: Response | any) {
    let errorMessage: string;

    if(error instanceof HttpErrorResponse) {
      // TODO: Refactoring da aplicação Angular 4.3
      // const body: error.error;
      // errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''} ${body}`

      errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
    } else {
      errorMessage = error.toString();
    }

    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }
}

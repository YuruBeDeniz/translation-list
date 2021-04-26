import {HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

export class HttpErrorHandler {
  public static handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      return throwError(`Http request client error. Reason: ${error.error.message}`);
    } else {
      return throwError(`Http request server error. Reason: ${error.status} ${error.message}`);
    }
  }
}

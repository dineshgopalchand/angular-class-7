import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        // do something with the exception
        alert('Unexpexted Error');
        console.log(error);
      }
}

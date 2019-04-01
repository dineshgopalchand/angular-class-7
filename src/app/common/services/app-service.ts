import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../errors/app-error';
import { NotFoundError } from '../errors/not-found-error';
import { BadInputError } from '../errors/bad-input-error';

export class AppService {
    constructor(private http, private url: string) { }
    getAll() {
        return this.http.get(this.url)
            .pipe(catchError(this.errorHandler));
    }

    create(data) {
        return this.http.post(this.url, data)
            .pipe(catchError(this.errorHandler));
    }

    remove(data) {
        return this.http.delete(this.url + '/' + data.id)
            .pipe(catchError(this.errorHandler));
    }
    // removePost1(post) {
    //   return this.http.delete(this.url + '/' + post.id)
    //   .toPromise(); // to make a observable  as a promise
    // }
    update(data) {
        // this.http.put(this.url + '/' + post.id, { isActive: true })
        return this.http.put(this.url + '/' + data.id, data)
            .pipe(catchError(this.errorHandler));

    }

    protected errorHandler = (error?: any) => {
        if (error.status === 404) {
            return throwError(new NotFoundError(error));
        } else
            if (error.status === 400) {
                return throwError(new BadInputError(error));
            }
        return throwError(new AppError(error));
        // return error;
    }
}

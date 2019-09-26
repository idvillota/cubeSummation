import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICube } from './cube';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CubeService {

  private cubeUrl = 'api/cube';

  constructor(private http: HttpClient) {
  }

  getCubes(): Observable<ICube[]> {
    return this.http.get<ICube[]>(this.cubeUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError))
      ;
  }

  getCube(id: string): Observable<ICube | undefined>{
    return this.getCubes()
      .pipe(
        map((cubes: ICube[]) => cubes.find(c => c.id === id))
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }

}

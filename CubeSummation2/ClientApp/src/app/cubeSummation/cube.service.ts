import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ICube, ICubeForCreation } from './cube';
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
        catchError(this.handleError)
      );
  }

  getCube(id: string): Observable<ICube | undefined> {
    return this.http.get<ICube>(this.cubeUrl + '/' + id)
      .pipe(
        tap(data => console.log('cube by id:' + id + ' ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createCube(cube: ICubeForCreation): Observable<ICubeForCreation> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.post<ICubeForCreation>(this.cubeUrl, cube, httpOptions);
  }

  updateCube(cube: ICube): Observable<ICube> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<ICube>(this.cubeUrl + '/' + cube.id, cube, httpOptions);
  }

  deleteCube(cubeId: string): Observable<ICube> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<ICube>(this.cubeUrl + '/' +  cubeId, httpOptions);
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

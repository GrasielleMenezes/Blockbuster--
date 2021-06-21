import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { filmes } from '../app/app.models';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url = 'http://localhost:3000/filmes'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os filmes
  getFilmes(): Observable<filmes[]> {
    return this.httpClient.get<filmes[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

/*
Não deu tempo para fazer, mas já tinha começado
  // salva um filme
  saveFilme(filmes: Filmes): Observable<filmes> {
    return this.httpClient.post<filmes>(this.url, JSON.stringify(Filmes), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // atualiza um filmes
  updateFilme(filmes: Filmes): Observable<Car> {
    return this.httpClient.put<filmes>(this.url + '/' + Filmes.id, JSON.stringify(Filmes), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um filme
  deleteFilme(filmes: Filmes) {
    return this.httpClient.delete<filmes>(this.url + '/' + Filmes.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
*/
  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, timeout, map } from 'rxjs/operators';

export interface HttpRequestConfig {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  params?: HttpParams | { [param: string]: string | string[] };
  reportProgress?: boolean;
  responseType?: 'json' | 'text' | 'blob' | 'arraybuffer';
  withCredentials?: boolean;
}

export interface HttpResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: HttpHeaders;
}

export interface HttpError {
  message: string;
  status: number;
  statusText: string;
  url?: string;
  error?: any;
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private readonly DEFAULT_TIMEOUT = 30000;
  private readonly DEFAULT_RETRIES = 3;
  private readonly BASE_URL = 'https://api.fintech-app.com';

  constructor(private http: HttpClient) {}

  get<T>(url: string, config?: HttpRequestConfig): Observable<T> {
    const fullUrl = this.buildFullUrl(url);
    const requestConfig = this.buildRequestConfig(config);

    return this.http.get<T>(fullUrl, requestConfig).pipe(
      timeout(config?.reportProgress ? this.DEFAULT_TIMEOUT : 15000),
      retry({ count: this.DEFAULT_RETRIES, delay: 1000 }),
      catchError(this.handleError)
    );
  }

  post<T>(url: string, body: any, config?: HttpRequestConfig): Observable<T> {
    const fullUrl = this.buildFullUrl(url);
    const requestConfig = this.buildRequestConfig(config);

    return this.http.post<T>(fullUrl, body, requestConfig).pipe(
      timeout(this.DEFAULT_TIMEOUT),
      retry({ count: this.DEFAULT_RETRIES, delay: 1000 }),
      catchError(this.handleError)
    );
  }

  put<T>(url: string, body: any, config?: HttpRequestConfig): Observable<T> {
    const fullUrl = this.buildFullUrl(url);
    const requestConfig = this.buildRequestConfig(config);

    return this.http.put<T>(fullUrl, body, requestConfig).pipe(
      timeout(this.DEFAULT_TIMEOUT),
      retry({ count: this.DEFAULT_RETRIES, delay: 1000 }),
      catchError(this.handleError)
    );
  }

  patch<T>(url: string, body: any, config?: HttpRequestConfig): Observable<T> {
    const fullUrl = this.buildFullUrl(url);
    const requestConfig = this.buildRequestConfig(config);

    return this.http.patch<T>(fullUrl, body, requestConfig).pipe(
      timeout(this.DEFAULT_TIMEOUT),
      retry({ count: this.DEFAULT_RETRIES, delay: 1000 }),
      catchError(this.handleError)
    );
  }

  delete<T>(url: string, config?: HttpRequestConfig): Observable<T> {
    const fullUrl = this.buildFullUrl(url);
    const requestConfig = this.buildRequestConfig(config);

    return this.http.delete<T>(fullUrl, requestConfig).pipe(
      timeout(this.DEFAULT_TIMEOUT),
      retry({ count: this.DEFAULT_RETRIES, delay: 1000 }),
      catchError(this.handleError)
    );
  }

  head<T>(url: string, config?: HttpRequestConfig): Observable<T> {
    const fullUrl = this.buildFullUrl(url);
    const requestConfig = this.buildRequestConfig(config);

    return this.http.head<T>(fullUrl, requestConfig).pipe(
      timeout(this.DEFAULT_TIMEOUT),
      catchError(this.handleError)
    );
  }

  options<T>(url: string, config?: HttpRequestConfig): Observable<T> {
    const fullUrl = this.buildFullUrl(url);
    const requestConfig = this.buildRequestConfig(config);

    return this.http.options<T>(fullUrl, requestConfig).pipe(
      timeout(this.DEFAULT_TIMEOUT),
      catchError(this.handleError)
    );
  }

  request<T>(method: string, url: string, config?: HttpRequestConfig & { body?: any }): Observable<T> {
    const fullUrl = this.buildFullUrl(url);
    const requestConfig = this.buildRequestConfig(config);

    return this.http.request<T>(method, fullUrl, {
      ...requestConfig,
      body: config?.body
    }).pipe(
      timeout(this.DEFAULT_TIMEOUT),
      catchError(this.handleError)
    );
  }

  private buildFullUrl(url: string): string {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return `${this.BASE_URL}${url.startsWith('/') ? url : '/' + url}`;
  }

  private buildRequestConfig(config?: HttpRequestConfig): any {
    const defaultConfig: any = {
      responseType: 'json',
      withCredentials: true,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    if (!config) {
      return defaultConfig;
    }

    if (config.headers) {
      if (config.headers instanceof HttpHeaders) {
        defaultConfig.headers = config.headers;
      } else {
        defaultConfig.headers = new HttpHeaders(config.headers);
      }
    }

    if (config.params) {
      defaultConfig.params = config.params instanceof HttpParams 
        ? config.params 
        : new HttpParams({ fromObject: config.params });
    }

    if (config.responseType) {
      defaultConfig.responseType = config.responseType;
    }

    if (config.withCredentials !== undefined) {
      defaultConfig.withCredentials = config.withCredentials;
    }

    if (config.reportProgress !== undefined) {
      defaultConfig.reportProgress = config.reportProgress;
    }

    return defaultConfig;
  }

  private handleError = (error: HttpErrorResponse): Observable<never> => {
    let errorMessage: string;
    const httpError: HttpError = {
      message: '',
      status: error.status,
      statusText: error.statusText,
      url: error.url,
      error: error.error
    };

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error del cliente: ${error.error.message}`;
      httpError.message = errorMessage;
    } else {
      switch (error.status) {
        case 0:
          errorMessage = 'No se pudo conectar con el servidor. Verifica tu conexión a internet.';
          break;
        case 400:
          errorMessage = error.error?.message || 'Solicitud incorrecta. Verifica los datos enviados.';
          break;
        case 401:
          errorMessage = 'Tu sesión ha expirado. Por favor, inicia sesión nuevamente.';
          break;
        case 403:
          errorMessage = 'No tienes permiso para realizar esta acción.';
          break;
        case 404:
          errorMessage = 'El recurso solicitado no fue encontrado.';
          break;
        case 408:
          errorMessage = 'La solicitud tardó demasiado. Intenta de nuevo.';
          break;
        case 422:
          errorMessage = error.error?.message || 'Los datos enviados no son válidos.';
          break;
        case 429:
          errorMessage = 'Demasiadas solicitudes. Por favor, espera un momento.';
          break;
        case 500:
          errorMessage = 'Error interno del servidor. Intenta más tarde.';
          break;
        case 502:
          errorMessage = 'El servidor no está disponible temporalmente.';
          break;
        case 503:
          errorMessage = 'El servicio no está disponible. Intenta más tarde.';
          break;
        case 504:
          errorMessage = 'El servidor tardó demasiado en responder.';
          break;
        default:
          errorMessage = `Error inesperado (${error.status}): ${error.statusText}`;
      }
      httpError.message = errorMessage;
    }

    console.error('HTTP Error:', httpError);
    return throwError(() => httpError);
  }
}
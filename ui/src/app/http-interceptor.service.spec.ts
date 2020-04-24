import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpXhrBackend, HttpRequest, HttpBackend, HTTP_INTERCEPTORS } from '@angular/common/http';


import { HttpInterceptorService } from './http-interceptor.service';

describe('HttpInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpInterceptorService,
          multi: true
        },
        HttpClient,
        HttpBackend
      ]
    });
  });

  // it('should be created', inject([HttpInterceptorService], (service: HttpInterceptorService) => {
  //   expect(service).toBeTruthy();
  // }));
});

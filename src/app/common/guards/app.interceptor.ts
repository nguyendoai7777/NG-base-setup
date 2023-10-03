import { HttpInterceptorFn } from '@angular/common/http';
import { injectAppConfig } from '@config/config.di';
import { inject, isDevMode } from '@angular/core';
import { Router } from '@angular/router';

export const Interceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const { appConfig } = injectAppConfig();
  if (!appConfig) {
    return next(req);
  }
  const token = localStorage.getItem('token');
  console.log(token);
  if (!token) {
    void router.navigateByUrl('/home');
  }
  const reqUrl = req.url.startsWith('/') ? req.url.slice(1) : req.url;
  const baseUrl = isDevMode()
    ? appConfig.staging.apiUrl
    : appConfig.prod.apiUrl;
  const url = (baseUrl.endsWith('/') ? baseUrl : baseUrl + '/') + reqUrl;
  return next(
    req.clone({
      url,
      setHeaders: {
        ...(url.includes('/api') && {
          Authorization: `Bearer user_with_authorization`,
        }),
      },
    })
  );
};

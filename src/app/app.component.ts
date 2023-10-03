import { Component, importProvidersFrom, inject } from '@angular/core';
import { provideRouter, Router, RouterOutlet } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAppConfig } from '@config/config.di';
import { AppConfig } from '@config/config.interface';
import { ChildCounterComponent } from '@components/child-count.component';
import { Interceptor } from './common/guards/app.interceptor';
import { ShareService } from '@services/share.service';
import appRoutes from './app.routes';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
  providers: [ShareService],
  standalone: true,
  imports: [ChildCounterComponent, RouterOutlet],
})
export class AppComponent {
  router = inject(Router);
  /*private static readonly Interceptor: HttpInterceptorFn = (req, next) => {
    const { appConfig } = injectAppConfig();
    if (!appConfig) {
      return next(req);
    }
    const reqUrl = req.url.startsWith('/') ? req.url.slice(1) : req.url;
    const baseUrl = isDevMode() ? appConfig.staging.apiUrl : appConfig.prod.apiUrl;
    const url = (baseUrl.endsWith('/') ? baseUrl : baseUrl + '/') + reqUrl;
    return next(
      req.clone({
        url,
        setHeaders: {
          ...(url.includes('/api') && { Authorization: `Bearer user_with_authorization` }),
        },
      })
    );
  };*/

  static boostrap(cfg: AppConfig) {
    return bootstrapApplication(this, {
      providers: [
        provideRouter(appRoutes),
        importProvidersFrom(BrowserAnimationsModule),
        provideAppConfig(cfg),
        provideHttpClient(withInterceptors([Interceptor])),
      ],
    }).catch((e) => console.error(`something went wrong: `, e));
  }
}

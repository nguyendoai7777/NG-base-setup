import { AppComponent } from './app/app.component';
import { AppConfig } from '@config/config.interface';

(async () => {
  const config: AppConfig = await fetch(
    'assets/config/environment.config.json'
  ).then((r) => r.json());
  void AppComponent.boostrap(config);
})();

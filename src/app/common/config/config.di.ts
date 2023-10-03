import { AppConfig } from './config.interface';
import { createInjectionToken } from '@utils/di';

/**
 *
 */
export const [injectAppConfig, provideAppConfig] =
  createInjectionToken<AppConfig>('App Configuration');

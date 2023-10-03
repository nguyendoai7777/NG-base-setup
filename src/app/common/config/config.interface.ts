export interface AppConfig {
  appConfig: {
    prod: BaseEnvironment;
    staging: BaseEnvironment;
  };
}

export interface BaseEnvironment {
  apiUrl: string;
}

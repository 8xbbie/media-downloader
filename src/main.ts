import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, HttpClientModule } from '@angular/common/http';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

registerLocaleData(en);


bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideNzI18n(en_US), importProvidersFrom(FormsModule), importProvidersFrom(HttpClientModule), provideAnimations()]
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



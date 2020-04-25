import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { EditorModule } from './editor/editor.module';
import { HomeModule } from './home/home.module';

import { CanDeactivateGuard } from './can-deactivate.guard';

import { HttpInterceptorService } from './http-interceptor.service';

const appRoutes: Routes = [
  { path: '', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'editor', loadChildren: 'app/editor/editor.module#EditorModule' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    HomeModule,
    EditorModule,
    RouterModule.forRoot(appRoutes),
    SharedModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    HttpClient,
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

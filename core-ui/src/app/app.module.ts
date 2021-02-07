import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './section/header/header.component';
import { FooterComponent } from './section/footer/footer.component';
import { ContentComponent } from './section/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ComingsoonComponent } from './pages/helper/comingsoon/comingsoon.component';
import { EnquirquoteComponent } from './pages/subpages/enquirquote/enquirquote.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsComponent } from './pages/helper/tab/tabs/tabs.component';
import { TabComponent } from './pages/helper/tab/tab/tab.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login/login.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { PolicynumberformComponent } from './pages/subpages/policynumberform/policynumberform.component';
import { DialogComponent } from './common/dialog/dialog.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactComponent } from './pages/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    AboutComponent,
    ComingsoonComponent,
    EnquirquoteComponent,
    TabsComponent,
    TabComponent,
    LoginComponent,
    PolicynumberformComponent,
    DialogComponent,
    HomePageComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    NgxUiLoaderModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    BrowserAnimationsModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

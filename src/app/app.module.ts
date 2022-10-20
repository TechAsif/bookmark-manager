import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { NgSelectModule } from '@ng-select/ng-select';
import { BookmarkmodalComponent } from './pages/components/bookmarkmodal/bookmarkmodal.component';


@NgModule({
  declarations: [
    AppComponent,
    BookmarkmodalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    MultiSelectModule,
    FormsModule,
    MatCardModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CalendarModule,
    TableModule,
    ToastModule,
    NgSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { DataService } from './components/service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AppComponent, SearchComponent, ResultsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}

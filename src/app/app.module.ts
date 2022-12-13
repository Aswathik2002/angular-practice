import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { TopicsModule } from './topics/topics.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    TopicsModule, 
  ],
 providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

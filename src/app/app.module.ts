import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContentModuleModule } from './content-module/content-module.module';
import { TemplateModuleModule } from './template-module/template-module.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ContentModuleModule,
    TemplateModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

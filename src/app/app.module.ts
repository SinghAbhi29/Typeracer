import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ApicallService } from "./apicall.service";
import { AppComponent } from "./app.component";
import { TextboxComponent } from "./textbox/textbox.component";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, TextboxComponent],
  imports: [BrowserModule, FormsModule, HttpModule, HttpClientModule],
  providers: [ApicallService],
  bootstrap: [AppComponent],
})
export class AppModule {}

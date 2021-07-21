import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { EditShapeComponent } from "./list-shape/modals/editShape/edit-shape.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ListShapeComponent } from "./list-shape/list-shape.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { GetAreaComponent } from "./list-shape/modals/getArea/get-area.component";
@NgModule({
  declarations: [
    GetAreaComponent,
    EditShapeComponent,
    AppComponent,
    ListShapeComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

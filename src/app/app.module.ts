import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    DicountpercentPipe,
    PostsComponent,
    usersComponent,
    NotFoundComponent,
    HomeComponent,
    ChildRootComponent,
    ChildRoot2Component,
    RegisterComponent,
    ReactiveregisterComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

////////
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { DicountpercentPipe } from './pipes/dicountpercent.pipe';
import { PostsComponent } from './posts/posts.component';
import { usersComponent} from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ChildRootComponent } from './child-root/child-root.component';
import { ChildRoot2Component } from './child-root2/child-root2.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveregisterComponent } from './reactiveregister/reactiveregister.component';
import { NotesComponent } from './notes/notes.component';


@NgModule({
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),

  ],
  // ...
})
export class AppBootstrapModule {}
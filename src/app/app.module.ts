import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// 3rd party modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HangmanComponent } from './hangman/hangman.component';


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HangmanComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

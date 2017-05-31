import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MoviesModule} from "./movies/movies.module";
import {MovieService} from "./shared/movie.service";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MoviesModule
	],
	providers: [MovieService],
	bootstrap: [AppComponent]
})
export class AppModule {
}

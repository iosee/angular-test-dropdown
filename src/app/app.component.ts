import {Component} from "@angular/core";
import {MovieService} from "app/shared/movie.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Movie Dropdown Exercise';

	constructor(private movieService: MovieService) {

	}
}

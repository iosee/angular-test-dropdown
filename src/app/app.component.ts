import {Component} from "@angular/core";
import {MovieService} from "app/shared/movie.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Interview Exercise: Dropdown Component';

	constructor(private movieService: MovieService) {
	}
}

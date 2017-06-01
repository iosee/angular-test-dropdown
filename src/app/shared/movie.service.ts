import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {DropdownSource} from "../movies/shared/dropdown-source";
import {Observable} from "rxjs/Observable";
import {DropdownItem} from "../movies/shared/dropdown-item";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import "rxjs/add/operator/mergeMap";

@Injectable()
export class MovieService implements DropdownSource {
	public name: string = 'Movie';
	public imageBase: string = 'https://image.tmdb.org/t/p/w45_and_h67_bestv2/';
	private apiKey: string = 'bc1e195159f0ee0de39c6de5fb2234b9';
	private serviceUrl: string = 'https://api.themoviedb.org/3/movie/popular';


	constructor(private http: Http) {
	}

	getList(): Observable<DropdownItem[]> {
		return this.http.get(this.serviceUrl, {
				params: {
					api_key: this.apiKey
				}
			})
			.map(response => {
				let movies = response.json().results,
					result = [];

				movies.forEach((movie) => result.push({
					value: movie.id,
					display: movie.title,
					image: movie.poster_path
				}));
				return result as DropdownItem[];
			})
			.catch(this.handleError);
	}

	handleError(error: any): Observable<any> {
		console.error('An error occurred', error);
		return Observable.of<any[]>([]);
	}
}

import {Observable} from "rxjs/Observable";
import {DropdownItem} from "./dropdown-item";

export interface DropdownSource {
	name: string;
	imageBase: string;
	getList(): Observable<DropdownItem[]>
}

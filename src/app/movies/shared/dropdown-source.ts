import {Observable} from "rxjs/Observable";
import {DropdownItem} from "./dropdown-item";

export interface DropdownSource {
	name: string;
	getList(): Observable<DropdownItem[]>
}

import {Component, Input, OnInit} from '@angular/core';
import {DropdownSource} from "../shared/dropdown-source";
import {DropdownItem} from "../shared/dropdown-item";

@Component({
	selector: 'movie-dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
	@Input() service: DropdownSource;

	closed: boolean = true;
	items: DropdownItem[];
	selectedItem: DropdownItem;

	constructor() {
	}

	ngOnInit(): void {
		this.service.getList().subscribe(items => this.items = items);
	}

	selectItem(item: DropdownItem): void {
		this.selectedItem = item;
	}
}

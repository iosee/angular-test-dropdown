import {Component, Input, OnInit} from "@angular/core";
import {DropdownSource} from "../shared/dropdown-source";
import {DropdownItem} from "../shared/dropdown-item";

@Component({
	selector: 'dropdown-list',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
	@Input() service: DropdownSource;
	@Input() emptyText: string = 'Select value...';

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
		this.toggleList();
	}

	toggleList(): void {
		this.closed = !this.closed;
	}

	clearSelection(): void {
		this.selectedItem = null;
	}
}

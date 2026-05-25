import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm = '';

  // output event to send search term to parent (child to parent communication)
  @Output() searchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    // emit search term to parent component
    this.searchEvent.emit(this.searchTerm);
  }

  onClear() {
    this.searchTerm = '';
    this.searchEvent.emit('');
  }
}

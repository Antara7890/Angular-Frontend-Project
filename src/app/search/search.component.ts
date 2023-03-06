import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  faMagnifyingGlass=faMagnifyingGlass;
  constructor(){}
  ngOnInit(): void {
 
  }
  enterSearchValue: string='';
  @Output()
  SearchTextChanged: EventEmitter<string>=new EventEmitter<string>()

  onSearchTextChanged(){
    this.SearchTextChanged.emit(this.enterSearchValue);
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchValue: string = '';
  constructor(private dataService: DataService) {}

  //Handles the input change on type///
  handleSearch(e: any) {
    this.searchValue = e.target.value;
    this.dataService.getRequestedData(this.searchValue);
  }

  //Submitting the searchvalue to api//
  handleSubmit() {
    this.dataService.getRequestedData(this.searchValue);
  }

  ngOnInit(): void {}
}

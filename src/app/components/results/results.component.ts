import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  p: number = 1;
  results: any = [];
  itemsPerPage = 6;
  //Getting the response data from the API//
  constructor(dataService: DataService) {
    dataService.getResults$().subscribe((resultList) => {
      this.results = resultList;
      console.log(resultList);
    });
  }

  ngOnInit(): void {}
}

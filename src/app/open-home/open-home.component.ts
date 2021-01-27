import { filterMockData } from './../mocks/filter-mock';
import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { spaceApi } from '../mocks/urlConstants';

@Component({
  selector: 'app-open-home',
  templateUrl: './open-home.component.html',
  styleUrls: ['./open-home.component.css']
})
export class OpenHomeComponent implements OnInit {
  filterData = filterMockData;
  articles: any;
  selectedYear: string = '';
  successfulLand: boolean;
  successLanch: boolean;

  constructor(private _BackendApiService: BackendApiService) { }

  ngOnInit(): void {
    this._BackendApiService.getData(spaceApi).subscribe(data => {
      this.articles = data;
    })
  }

  activeCss(event) {
    if (this.selectedYear.toString().length > 1 && event.Year == this.selectedYear) {
      return this.selectedYear;
    }
  }
  onClickyear(event): void {
    this.selectedYear = event.Year;
    this.articles = [];
    this._BackendApiService.getData(spaceApi, this.constructparams()).subscribe(data => {
      this.articles = data;
    })
  }
  constructparams() {
    let obj = {}
    if (this.successLanch !== undefined) {
      obj['launch_success'] = this.successLanch;
    }
    if (this.successfulLand !== undefined) {
      obj['land_success'] = this.successfulLand;
    }
    if (this.selectedYear.toString().length > 1) {
      obj['launch_year'] = this.selectedYear;
    }
    return obj;
  }

  landClick(event): void {
    this.successfulLand = event;
    this._BackendApiService.getData(spaceApi, this.constructparams()).subscribe(data => {
      this.articles = data;
    })
  }

  launchClick(event): void {
    this.successLanch = event;
    this._BackendApiService.getData(spaceApi, this.constructparams()).subscribe(data => {
      this.articles = data;
    })
  }
}

import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'list',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  items: any[] = []
  citySelected: string = '';
  cityInformation: any;
  citySelectedByApi: any;
  citySelectedFlag: any;


  constructor(
    private router: Router,
    private routerActive: ActivatedRoute,
    private apiservice: ApiService
  ) { }

  ngOnInit() {
    this.routerActive.params.subscribe(
      params => {
        this.citySelected = params.cities;
      }
    )

    this.items = this.apiservice.getCitiesMonuments(this.citySelected)
    this.cityInformation = this.apiservice.getCityInformations(this.citySelected)

    this.citySelectedByApi = this.cityInformation.city;
    this.citySelectedFlag = this.cityInformation.flag;
  }

  goToDetails(id){
    this.router.navigate(['city-details', {id: id}])
  }

}

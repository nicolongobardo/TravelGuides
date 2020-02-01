import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {
  details:any;
  city:any;

  constructor(
    private apiService: ApiService,
    private routerActive: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.routerActive.params.subscribe(
      params => {
        this.details = this.apiService.getDetails(params.id);
        console.log(this.details)
        this.city = params.city;
        //this.url = this.details.src;
      }
    )
  }

  goToCity(city){
    this.router.navigate(['list', {cities: city}])
  }


}

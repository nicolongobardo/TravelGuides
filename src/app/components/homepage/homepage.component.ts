import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  valueOfInput: string = '';
  cityForButton: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cityBySearch(event){
    this.cityForButton = event.target.value
  }

  goToCityBySearch(){
    if(this.cityForButton == "Roma" || this.cityForButton == "roma" || this.cityForButton == "ROMA"){
      this.router.navigate(['list', {cities: 'Roma'}])
    } else if(this.cityForButton == "Parigi" || this.cityForButton == "parigi" || this.cityForButton == "PARIGI"){
      this.router.navigate(['list', {cities: 'Parigi'}])
    } else if(this.cityForButton == "Londra" || this.cityForButton == "londra" || this.cityForButton == "LONDRA"){
      this.router.navigate(['list', {cities: 'Londra'}])
    } else if(this.cityForButton == "Madrid" || this.cityForButton == "madrid" || this.cityForButton == "MADRID"){
      this.router.navigate(['list', {cities: 'Madrid'}])
    } else {
      alert('Città non presente nel database, contattare l\'assistenza')
    }
  }

  goToCity(city){
    this.router.navigate(['list', {cities: city}])
  }
}

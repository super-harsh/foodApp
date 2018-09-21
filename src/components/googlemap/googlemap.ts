import { Component,ViewChild  } from '@angular/core';
import {} from '@types/googlemaps';

 declare var google: any;

@Component({
  selector: 'googlemap',
  templateUrl: 'googlemap.html'
})
export class GooglemapComponent {

	@ViewChild("map") mapElement;
	map: any;

  constructor() {

  }

  ngOnInit(){
  	this.initMap();
  }

initMap(){
	let coords = new google.maps.LatLng(-41.288562,174.768046);
	let mapOptions: google.maps.MapOptions = {
		center: coords,
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP

	}
	this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

	let mark : google.maps.Marker = new google.maps.Marker({
		map: this.map,
		position: coords
		}) 

}

}

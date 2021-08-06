/* Stylesheet by Martin P. Goettl, 2021 */

$(document).ready(function() {
		
		var mapCenter = [44.796013, -91.497962];
		//var cities;
		var map = L.map('map', {
		defaultExtentControl: true,
		center: mapCenter, // EDIT latitude, longitude to re-center map [39.34, -99.85],
		zoom: 12,  // EDIT from 1 to 18 -- decrease to zoom out, increase to zoom in
		scrollWheelZoom: true,
		tap: false,
		fullscreenControl: true,
		fullscreenControlOptions: {
			position: 'topleft'
		}
		
		
		
				
		});
		
				
		var basemaps = [
			L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
				label: 'Toner',
				iconURL: 'img/tonerBlack.png'
			}),
			
			L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
				attribution: 'Map tiles by <a href="https://stamen.com">Stamen Design</a>, <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
				label: 'Watercolor',
				iconURL: 'img/watercolor.jpg'
			
			}),
			
			L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png', {
				attribution: 'Map tiles by <a href="https://stamen.com">Stamen Design</a>, <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
				label: 'Toner Lite',				// optional label used for tooltip
				iconURL: 'img/tonerGray.png'
			})
		];

		map.addControl(L.control.basemaps({
			position: "topright",
			basemaps: basemaps,
			
		}));
		$.getJSON("data/map.json",function(data){
		// add GeoJSON layer to the map once the file is loaded
		var datalayer = L.geoJson(data ,{
		onEachFeature: function(feature, featureLayer) {
		featureLayer.bindPopup(feature.properties.name + "<br>" + feature.properties.Schl_Code);
		}
		}).addTo(map);
		
		});
	
});
	
				
		
	
	

	








  
  

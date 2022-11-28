// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center and zoom level 13.5.3
let map = L.map('mapid').setView([30, 30], 2);  

// We create the tile layer that will be the background of our map.
// light color map, dark, satellite streets, light
    let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {   
    //let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a {href}="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });
 // Then add 'streets' tile layer to map 13.5.3
 streets.addTo(map);    

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/TBrickey/Mapping_Earthquakes/main/majorAirports.json";  
  
// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});
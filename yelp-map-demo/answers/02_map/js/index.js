//initialize map:
//42.033695,"longitude":-87.680911
// 1 -> 18
const mymap = L.map('mapid').setView([42.033695, -87.680911], 15);

//initialize tiles (there are many options):
L.tileLayer.provider('Stamen.TonerLite').addTo(mymap);
// L.tileLayer.provider('Stamen.Watercolor').addTo(mymap);
// L.tileLayer.provider('Stamen.Terrain').addTo(mymap);
// L.tileLayer.provider('Stamen.TerrainBackground').addTo(mymap);
// L.tileLayer.provider('Stamen.Toner').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerBackground').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerHybrid').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerLines').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerLabels').addTo(mymap);



// // CODE TO GENERATE LOTS OF FAKE MARKERS
// const generateRandomMarkers = (numCoords=100) => {
//     return new Array(numCoords).fill(null).map(
//         () => [ (Math.random() * 0.6 + 51), -1 * Math.random() + 0.4 ]
//     );
// };
// const coordinates = generateRandomMarkers(numCoords=50);
// console.log(coordinates);

// // create markers 
// for (coord of coordinates) {
//     const marker = L.marker(coord).addTo(mymap);
//     marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
// }
const restaurants = [{"id":"0jdYhWHCMsrWxxVoylfyBw","name":"Campagnola","rating":4.5,"image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/uZN9hqfxlY5qWFXdN1l-GQ/o.jpg","display_address":"815 Chicago Ave, Evanston, IL 60202","coordinates":{"latitude":42.0327399,"longitude":-87.6786599},"price":"$$","review_count":259},{"id":"KAxqU9NaWCDexoCrzg21GA","name":"Trattoria Demi","rating":3.5,"image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/02Kb8QOlBfBrxLh6_RrUSA/o.jpg","display_address":"1571 Sherman Ave, Evanston, IL 60201","coordinates":{"latitude":42.0461761,"longitude":-87.6815797},"price":"$$","review_count":208},{"id":"QU_WGUSXufR2CHU4-rtvOw","name":"Trattoria D.O.C.","rating":3.5,"image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/drSYr5-1AYDYmggoSlg3Ew/o.jpg","display_address":"706 Main St, Evanston, IL 60202","coordinates":{"latitude":42.033695,"longitude":-87.680911},"price":"$$","review_count":212},{"id":"8L6I4TIx4SGP0vFlDpbr7w","name":"Dave's New Kitchen","rating":4,"image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/pfN50wFo7d41L_N0syWhCw/o.jpg","display_address":"815 Noyes St, Evanston, IL 60201","coordinates":{"latitude":42.0585649,"longitude":-87.6823699},"price":"$$","review_count":125},{"id":"ss_w9TZiXBnuBrTfrMtG4Q","name":"Anto Pizza & Pasta Chicago","rating":4.5,"image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/HhGIAjspw7BvOQAnRv2RiQ/o.jpg","display_address":"1547 W Jarvis Ave, Chicago, IL 60626","coordinates":{"latitude":42.015871,"longitude":-87.669894},"review_count":168},{"id":"TL7XXnQ5MzP2ATYgMF0-Yw","name":"Pasta Luna","rating":4,"image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/UBhTF5I1AkUbxAWea2Ct-w/o.jpg","display_address":"1635 Chicago Ave, Evanston, IL 60201","coordinates":{"latitude":42.047403327861595,"longitude":-87.6788436},"review_count":5},{"id":"AwACr6hY4uf1rK-qZ6fVGw","name":"Carlos & Carlos - Wilmette","rating":4.5,"image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/ds_bffT22R6eDmZrR4Gaig/o.jpg","display_address":"615 Green Bay Rd, Wilmette, IL 60091","coordinates":{"latitude":42.075667,"longitude":-87.708902},"review_count":43},{"id":"3NViikBJwbjvq1ensGYRcw","name":"Pasta D'Arte Trattoria Italiana","rating":4.5,"image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/yd8Fq6Vgjf1QEfbDVjlUZw/o.jpg","display_address":"6311 N Milwaukee Ave, Chicago, IL 60646","coordinates":{"latitude":41.99563,"longitude":-87.78578},"price":"$$","review_count":483},{"id":"-nL_aaa4fqYMhxE6rHIWrQ","name":"Union Pizzeria-Evanston","rating":4,"image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/I9IxX_R_sFhgsJIIHWSUOw/o.jpg","display_address":"1245 Chicago Ave, Evanston, IL 60202","coordinates":{"latitude":42.0409316616987,"longitude":-87.6803231586021},"price":"$$","review_count":458},{"id":"jXX6IkrS2dTdQXVeRzgo_A","name":"Napolita Pizzeria & Wine Bar","rating":4,"image_url":"https://s3-media4.fl.yelpcdn.com/bphoto/cfK2sidzXiZ_5Tk6uZk_lw/o.jpg","display_address":"1126 Central Ave, Wilmette, IL 60091","coordinates":{"latitude":42.0767247676849,"longitude":-87.7063847333193},"price":"$$","review_count":255}]

for (const restaurant of restaurants) {
    const marker = L.marker([restaurant.coordinates.latitude, restaurant.coordinates.longitude]).addTo(mymap);
    marker.bindPopup(`<b>${restaurant.name}</b><br>${restaurant.display_address}`).openPopup();
}

// // create circle:
// const circle = L.circle([51.5, -0.09], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);

// // create polygon:
// const polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);

// connect each object to a "popup" effect:
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");
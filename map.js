var map = L.map('map').fitWorld();

L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {
    maxZoom: 19,
    attribution: '© Google Satellite Map'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy.toFixed(2);
    L.marker(e.latlng).addTo(map)
    .bindPopup("Akurasi anda adalah : <b>"  + radius + "</b> meter, <br/> Klik <a href='https://www.google.com/maps/place/"+ e.latlng.lat +","+ e.latlng.lng +"'>disini</a> untuk copy link sharelok").openPopup();
    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

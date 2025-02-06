var map = L.map('map').fitWorld();

L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {
    maxZoom: 19,
    attribution: '© Google Satellite Map'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy.toFixed(2);
    L.marker(e.latlng).addTo(map)
    .bindPopup("Akurasi anda adalah : <b>"  + radius + "</b> meter, Klik <button class='btn btn-success btn-sm' onclick='GeeksForGeeks()'>Copy</button><div style='display:none' id='asu'>https://www.google.com/maps/place/"+ e.latlng.lat.toFixed(5) +","+ e.latlng.lng.toFixed(5) +"").openPopup();
    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

function GeeksForGeeks() {
    Swal.fire({
        title: "Sukse copy sharelok",
        icon: "success",
      });
    var range = document.createRange();
    range.selectNode(document.getElementById("asu"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}

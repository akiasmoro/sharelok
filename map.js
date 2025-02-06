var map = L.map('map').fitWorld();

L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {
    maxZoom: 19,
    attribution: '© Google Satellite Map'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy.toFixed(2);
    L.marker(e.latlng).addTo(map)
    .bindPopup("Akurasi anda adalah : <b>"  + radius + "</b> meter, Klik <button class='btn btn-success btn-sm' onclick='Copy()'>Copy</button><div style='display:none' id='copydata'>https://www.google.com/maps/place/"+ e.latlng.lat.toFixed(5) +","+ e.latlng.lng.toFixed(5) +"</div>").openPopup();
    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

function Copy() {
        var temp = $("<input>");
        $("body").append(temp);
    
        var previewHeader = $("#copydata").text();
        var contentTogether = previewHeader;
    
        temp.val(contentTogether).select();
        document.execCommand("copy");
        $("#thecopiedtext").text(contentTogether);
        temp.remove();

    Swal.fire({
        title: "Sukse copy sharelok",
        icon: "success",
      });
}

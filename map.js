
var map = L.map('map').fitWorld();

L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {
    maxZoom: 21,
    attribution: '© Google Satellite Map'
}).addTo(map);





map.locate({enableHighAccuracy: true, setView: true, maxZoom: 18,  watch: true});

function onLocationFound(e) {
    FreezeUI({ text: 'Mencari Koordinat' }); // Freeze with a custom text
    var radius = e.accuracy.toFixed(2);
    L.marker(e.latlng).addTo(map)
    .bindPopup("Akurasi anda adalah : <b>"  + radius + "</b> meter").openPopup();
    // .bindPopup("Akurasi anda adalah : <b>"  + radius + "</b> meter, Klik <button class='btn btn-success btn-sm' onclick='Copy()'>Copy</button><div style='display:none' id='copydata'>https://www.google.com/maps/place/"+ e.latlng.lat.toFixed(5) +","+ e.latlng.lng.toFixed(5) +" (Akurasi Sharelok  adalah : "  + radius + " meter. Powered by BPN Lampung Timur)</div>").openPopup();
    L.circle(e.latlng, radius).addTo(map);
    if (radius < 5){
        UnFreezeUI();
        map.stopLocate()
        Swal.fire({
            title: "Berhasil mendapatkan koordinat.",
            icon: "success",
          });
          window.location.href = "whatsapp://send?text=https://www.google.com/maps/place/"+ e.latlng.lat.toFixed(5) +","+ e.latlng.lng.toFixed(5) +" (Akurasi Sharelok  adalah : "  + radius + " meter. Powered by BPN Lampung Timur"
    }
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
      $( "body" ).removeClass( "swal2-shown" )
      $( "body" ).removeClass( "swal2-height-auto" )
       
}

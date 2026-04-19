function iniciarMap() {
    const cor = {lat: 9.888044959320842 ,lng: -84.07524867834728};
    const mapa = new google.maps.Map(document.getElementById('map'), { zoom: 15, center: cor });
    const marker= new google.maps.Marker({position :cor, map: mapa});
}
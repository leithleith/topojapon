function localisation()
{
    if ("geolocation" in navigator)
    {
        var geo_options = {
            enableHighAccuracy: true, 
            maximumAge        : 30000, 
            timeout           : 27000
        };
        var wpid = navigator.geolocation.getCurrentPosition(geo_success, geo_error, geo_options);
    }
    else
    {
        document.getElementById("msg").innerHTML = "G&eacute;olocalisation inactive !";
    }
}
function geo_success(position)
{
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var radius = position.coords.accuracy;
    L.tileLayer('http://maps.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {attribution: "<a href='http://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"}).addTo(map);
    map.setView(L.latLng(lat,lon),10);
    // L.marker(position.latlng).addTo(map).bindPopup("rayon du cercle : " + radius + " m").openPopup();
    L.marker([lat, lon]).addTo(map).bindPopup("rayon du cercle : " + radius + " m").openPopup();
    //L.circle(position.latlng, radius).addTo(map);
    L.circle([lat, lon], radius).addTo(map);
    document.getElementById("mapid").style.visibility = "visible";
}
function geo_error()
{
    var lat = 43.36;
    var lon = 145.712;
    L.tileLayer('http://maps.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {attribution: "<a href='http://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"}).addTo(map);
    map.setView(L.latLng(lat,lon),10);
    L.marker([lat, lon]).addTo(map);
    document.getElementById("mapid").style.visibility = "visible";    
}
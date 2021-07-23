var mymap = L.map("mapid");

const getAddress = async () => {
  const ip = document.getElementById("input").value;

  const response =
    await fetch(`https://geo.ipify.org/api/v1?apiKey=at_dDMyhNSWueuCPTAz5DFSzijZeglPZ&ipAddress=${ip}
    `);

  const data = await response.json();

  console.log(data);

  var city = data["location"]["city"];
  var region = data["location"]["region"];
  var isp = data["isp"];
  var time = data["location"]["timezone"];

  var lat = data["location"]["lat"];
  var lng = data["location"]["lng"];

  document.getElementById("ip").innerHTML = ip;
  document.getElementById("city").innerHTML = city;
  document.getElementById("region").innerHTML = region;
  document.getElementById("time").innerHTML = time;
  document.getElementById("isp").innerHTML = isp;

  mymap.setView([lat, lng], 13);
  var marker = L.marker([lat, lng]).addTo(mymap);
  marker.bindPopup("<b>Your IP is here</b>").openPopup();
};

(function () {
  mymap.setView([51.505, -0.09], 13);
  var marker = L.marker([51.5, -0.09]).addTo(mymap);
  marker.bindPopup("<b>Your IP is here</b>").openPopup();
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
    {
      maxZoom: 18,
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
    }
  ).addTo(mymap);
})();

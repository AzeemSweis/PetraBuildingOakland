$(window).on('load', function initMap() {
  //Animation
  $(".loader-wrapper").fadeOut("slow");
  // The location of Uluru
  const petraOakland = {
    lat: 37.80688,
    lng: -122.27177
  };
  // The map, centered at PBO
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: petraOakland,
  });
  // The marker, positioned at PBO
  const marker = new google.maps.Marker({
    position: petraOakland,
    map: map,
  });

  $('body').show();
});

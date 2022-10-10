mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    center: [long, lat], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
//campground.geometry.coordinates
map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat([long, lat])
    .setPopup(
        new mapboxgl.Popup({ offest: 25 })
            .setHTML(
                `<h3>${title}</h3><p>${loc}</p>`
            )
    )
    .addTo(map)
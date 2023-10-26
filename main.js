let latitude = 34.028439003586854, longitude = -118.44800644543977

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [longitude, latitude],
    zoom: 4
})

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
)

var img1 = document.querySelector("#liberty")
var marker1 = new mapboxgl.Marker({
    element: img1
})
    .setLngLat([74.0445, 40.6892])
    .addTo(map)

var img2 = document.querySelector("#bridge")
var marker2 = new mapboxgl.Marker({
    element: img2
})
    .setLngLat([122.4783, 37.8199])
    .addTo(map)

var img3 = document.querySelector("#rushmore")
var marker3 = new mapboxgl.Marker({
    element: img3
})
    .setLngLat([103.4538, 43.8803])
    .addTo(map)

var img4 = document.querySelector("#whitehouse")
var marker4 = new mapboxgl.Marker({
    element: img4
})
    .setLngLat([77.0365, 38.8977])
    .addTo(map)

var img5 = document.querySelector("#canyon")
var marker5 = new mapboxgl.Marker({
    element: img5
})
    .setLngLat([112.1401, 36.0544])
    .addTo(map)

var img6 = document.querySelector("#falls")
var marker6 = new mapboxgl.Marker({
    element: img6
})
    .setLngLat([79.0849, 43.0896])
    .addTo(map)

var img7 = document.querySelector("#bell")
var marker7 = new mapboxgl.Marker({
    element: img7
})
    .setLngLat([75.1503, 39.9496])
    .addTo(map)

var img8 = document.querySelector("#sign")
var marker8 = new mapboxgl.Marker({
    element: img8
})
    .setLngLat([118.3215, 34.1341])
    .addTo(map)

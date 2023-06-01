# Geo notes

[geo-intro - read this](https://aeturrell.github.io/coding-for-economists/geo-intro.html)


## Project 3D to 2D 

Convert from latitude, longitude to x, y 

**No exact solution exists**
There is no isometric map from the sphere to the plane. When you convert lat/lon coordinates from the sphere to x/y coordinates in the plane, you cannot hope that all lengths will be preserved by this operation. You have to accept some kind of deformation. Many different map projections do exist, which can achieve different compromises between preservations of lengths, angles and areas. For smallish parts of earth's surface, [transverse Mercator](https://en.wikipedia.org/wiki/Transverse_Mercator_projection) is quite common. You might have heard about [UTM](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system). But there are [many more](https://en.wikipedia.org/wiki/List_of_map_projections).


The formulas you quote compute *x/y/z*, i.e. a point in 3D space. But even there you'd not get correct distances automatically. The shortest distance between two points on the surface of the sphere would go through that sphere, whereas distances on the earth are mostly geodesic lengths following the surface. So they will be longer.

## 3D to 1D - Geo hashing

Geohash is a public domain geocode system invented in 2008 by Gustavo Niemeyer which encodes a geographic location into a short string of letters and digits. 

https://en.wikipedia.org/wiki/Geohash

https://www.npmjs.com/package/latlon-geohash


## Algorithms

### Dijkstra - find the shortest path 

https://www.youtube.com/watch?v=mWNLMg2WxY0&t=4s&ab_channel=%C4%90aIT%E1%BB%9D


### Haversine formula - find distance between 2 points

![formula](https://images.prismic.io/sketchplanations/e1e45776-aa40-4806-820e-b5c5b8050f4b_SP+687+-+The+haversine+formula.png?auto=compress%2Cformat&fit=max&w=640&q=50)

```
a = sin²(ΔlatDifference /2) + cos(lat1).cos(lt2).sin²(ΔlonDifference/2)
c = 2.atan2(√a, √(1−a))
d = R.c
```

where,

- `ΔlatDifference = lat1 – lat2 (difference of latitude)`
- `ΔlonDifference = lon1 – lon2 (difference of longitude)`
- R is radius of earth i.e 6371 KM or 3961 miles
- d is the distance computed between two points.

https://www.npmjs.com/package/haversine

https://www.npmjs.com/package/geo-haversine

https://www.igismap.com/haversine-formula-calculate-geographic-distance-earth/

```js
// convert coordinates to standard format based on the passed format option
var convertCoordinates = function (format, coordinates) {
  switch (format) {
  case '[lat,lon]':
    return { latitude: coordinates[0], longitude: coordinates[1] }
  case '[lon,lat]':
    return { latitude: coordinates[1], longitude: coordinates[0] }
  case '{lon,lat}':
    return { latitude: coordinates.lat, longitude: coordinates.lon }
  case '{lat,lng}':
    return { latitude: coordinates.lat, longitude: coordinates.lng }
  case 'geojson':
    return { latitude: coordinates.geometry.coordinates[1], longitude: coordinates.geometry.coordinates[0] }
  default:
    return coordinates
  }
}


// convert to radians
var toRad = function (num) {
  return num * Math.PI / 180
}

// main function
var haversine = (function () {
  var RADII = {
    km:    6371,
    mile:  3960,
    meter: 6371000,
    nmi:   3440
  }

  return function haversine (startCoordinates, endCoordinates, options) {
    options   = options || {}

    var R = options.unit in RADII
      ? RADII[options.unit]
      : RADII.km

    var start = convertCoordinates(options.format, startCoordinates)
    var end = convertCoordinates(options.format, endCoordinates)

    var dLat = toRad(end.latitude - start.latitude)
    var dLon = toRad(end.longitude - start.longitude)
    var lat1 = toRad(start.latitude)
    var lat2 = toRad(end.latitude)

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2)

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))

    if (options.threshold) {
      return options.threshold > (R * c)
    }

    return R * c
  }

})()


// usage
const start = {
  latitude: 30.849635,
  longitude: -83.24559
}

const end = {
  latitude: 27.950575,
  longitude: -82.457178
}

console.log(haversine(start, end))
console.log(haversine(start, end, {unit: 'mile'}))
console.log(haversine(start, end, {unit: 'meter'}))
console.log(haversine(start, end, {threshold: 1}))
console.log(haversine(start, end, {threshold: 1, unit: 'mile'}))
console.log(haversine(start, end, {threshold: 1, unit: 'meter'}))
```

## Geospatial database

### S2 Geometry (Google S2)

https://github.com/radarlabs/s2

https://www.npmjs.com/package/s2-geometry


https://stackoverflow.com/questions/57686995/how-to-perform-the-search-operation-using-google-s2-geometry



I would break this problem up into several steps:

1. Pick an appropriate S2-Level for your application. In your case, since you're querying by 5 KM radii, I'd pick level 13 cells, that have an average size of 1.27 km^2.
2. Generate a level-13 cell covering of the 5 KM radius around the person.
3. Get a level-13 cell from the lat/lng of the car.
4. Do a contains check of the car S2 Cell to the 5 KM radius S2 Cell covering.

```js
const s2 = require('@radarlabs/s2');

// s2 cell level of ~1.27 km^2
const level = 13;

// cell covering of enclosure around a person
const enclosureLLs = [
  [40.77933906065449, -73.96983146667479],
  [40.77933906065449, -73.9634370803833],
  [40.78483079505022, -73.9634370803833],
  [40.78483079505022, -73.96983146667479],
].map((latlng) => {
  const [lat, lng] = latlng;
  return new s2.LatLng(lat, lng);
});

const enclosureCells = new Set(s2.RegionCoverer.getCoveringTokens(enclosureLLs, { min: level, max: level }));
//-> Set { '89c25894', '89c2589c' }

// arbitrary vehicle lat longs

const vehicle1 = new s2.CellId(new s2.LatLng(40.78340103809933,  -73.96515369415283)).parent(level);
// -> '89c2589c'

const vehicle2 = new s2.CellId(new s2.LatLng(40.782848623761375, -73.95506858825684)).parent(level);
// -> '89c258a4'


console.log(enclosureCells.has(vehicle1.token()));
// -> true

console.log(enclosureCells.has(vehicle2.token()));
// -> false
```

### Mongodb - 2dsphere Indexes

https://www.mongodb.com/docs/manual/core/2dsphere/

### Oracle's spatial database
https://www.oracle.com/database/spatial/

https://www.oracle.com/autonomous-database/what-is-geospatial-database/

### Postgres  - postgis
https://postgis.net/

## Data structure

### Graph-data-structure
https://www.npmjs.com/package/graph-data-structure

### Adapting Radix Trees
https://blog.nlnetlabs.nl/adapting-radix-trees/


### Quadtree
https://www.arangodb.com/2018/01/introduction-geo-indexes-performance-characteristics-part-1/


https://www.youtube.com/watch?v=nsVsdHeTXIE


## GeoJSON

GeoJSON is a format for encoding a variety of geographic data structures.

```json
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}
```

GeoJSON supports the following geometry types: `Point`, `LineString`, `Polygon`, `MultiPoint`, `MultiLineString`, and `MultiPolygon`. Geometric objects with additional properties are `Feature` objects. Sets of features are contained by `FeatureCollection` objects.


## AWS 

https://aws.amazon.com/blogs/compute/implementing-geohashing-at-scale-in-serverless-web-applications/


## Calculate coordinates of square x miles from center point?

https://gis.stackexchange.com/questions/15545/calculating-coordinates-of-square-x-miles-from-center-point


### Approximation for small areas

If the part of the surface of the earth which you want to draw is relatively small, then you can use a very simple approximation. You can simply use the horizontal axis x to denote longitude λ, the vertical axis y to denote latitude φ. The ratio between these should not be 1:1, though. Instead you should use cos(φ0) as the aspect ratio, where φ0 denotes a latitude close to the center of your map. Furthermore, to convert from angles (measured in radians) to lengths, you multiply by the radius of the earth (which in this model is assumed to be a sphere).

- *x = r λ cos(φ0)*
- *y = r φ*

This is simple [equirectangular projection](https://en.wikipedia.org/wiki/Equirectangular_projection). In most cases, you'll be able to compute cos(φ0) only once, which makes subsequent computations of large numbers of points really cheap.

https://stackoverflow.com/questions/16266809/convert-from-latitude-longitude-to-x-y

### Create a bounding box around the geo point 

I have a geo latitude and longitude (ex: 39.6199,-79.9535). How can I build a bounding box around the point with 1km of radius?

The distance between two longitude lines changes according to the latitude line you're on. It can be computed as:

```
3960 * 2 * pi /360 * cosine(latitude) in miles
```

The distance between two latitude lines is constant everywhere: **69 miles.**

So, in order to draw a square of 1x1 miles around a geographical location you should find the two latitude lines parallel to the latitude of the point with distance 0.5 mile along south and north. Then find two parallel longitude lines with 0.5 miles distance along west and east.

For example, 0.5 mile means 0.5/69 latitude difference. 

If the latitude of the given point is `39.6199` then the latitudes of upper and lower sides of the square have latitude values: 
`36.6199+(0.5/69)` and `36.6199-(0.5/69)` respectively.


[Readmore](https://stackoverflow.com/questions/12448629/create-a-bounding-box-around-the-geo-point)

### Check if geo-point is inside or outside of polygon

[Read more](https://stackoverflow.com/questions/43892459/check-if-geo-point-is-inside-or-outside-of-polygon)

[Nodejs - polygon-lookup](https://www.npmjs.com/package/polygon-lookup)


## Tools

https://github.com/pelias/pelias

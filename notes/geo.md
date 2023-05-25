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

```
a = sin²(ΔlatDifference/2) + cos(lat1).cos(lt2).sin²(ΔlonDifference/2)
c = 2.atan2(√a, √(1−a))
d = R.c
```

https://www.npmjs.com/package/haversine

https://www.npmjs.com/package/geo-haversine

https://www.igismap.com/haversine-formula-calculate-geographic-distance-earth/

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
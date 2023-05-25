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
https://www.npmjs.com/package/s2-geometry

https://www.npmjs.com/package/s2-geometry

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
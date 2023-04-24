# Geo notes

[geo-intro - read this](https://aeturrell.github.io/coding-for-economists/geo-intro.html)

## Calculate coordinates of square x miles from center point?



https://gis.stackexchange.com/questions/15545/calculating-coordinates-of-square-x-miles-from-center-point

## Convert from latitude, longitude to x, y

**No exact solution exists**
There is no isometric map from the sphere to the plane. When you convert lat/lon coordinates from the sphere to x/y coordinates in the plane, you cannot hope that all lengths will be preserved by this operation. You have to accept some kind of deformation. Many different map projections do exist, which can achieve different compromises between preservations of lengths, angles and areas. For smallish parts of earth's surface, [transverse Mercator](https://en.wikipedia.org/wiki/Transverse_Mercator_projection) is quite common. You might have heard about [UTM](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system). But there are [many more](https://en.wikipedia.org/wiki/List_of_map_projections).


The formulas you quote compute *x/y/z*, i.e. a point in 3D space. But even there you'd not get correct distances automatically. The shortest distance between two points on the surface of the sphere would go through that sphere, whereas distances on the earth are mostly geodesic lengths following the surface. So they will be longer.

### Approximation for small areas

If the part of the surface of the earth which you want to draw is relatively small, then you can use a very simple approximation. You can simply use the horizontal axis x to denote longitude λ, the vertical axis y to denote latitude φ. The ratio between these should not be 1:1, though. Instead you should use cos(φ0) as the aspect ratio, where φ0 denotes a latitude close to the center of your map. Furthermore, to convert from angles (measured in radians) to lengths, you multiply by the radius of the earth (which in this model is assumed to be a sphere).

- *x = r λ cos(φ0)*
- *y = r φ*

This is simple [equirectangular projection](https://en.wikipedia.org/wiki/Equirectangular_projection). In most cases, you'll be able to compute cos(φ0) only once, which makes subsequent computations of large numbers of points really cheap.

https://stackoverflow.com/questions/16266809/convert-from-latitude-longitude-to-x-y

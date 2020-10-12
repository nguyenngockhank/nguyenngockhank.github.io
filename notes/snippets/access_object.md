# Access prop of object

## Problem 

To many checking before get the needed information. 

```js
// in fantasy 
let population = countries.vietnam.hochiminh.district9.population;

// in reality
let population
if (countries 
        && countries.vietnam 
        && countries.vietnam.hochiminh 
        && countries.vietnam.hochiminh.district9
    ) {
    population = countries.vietnam.hochiminh.district9.population;
}
```



## Solution

```js
let population = accessTo(countries, 'vietnam.hochiminh.district9.population');
```

The implementation of function `accessTo`

```js
/**
 * @param object o - Target Object
 * @param string s - Path to be access
 * @return mixed
 */
function accessTo(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if(null === o || undefined === o) {
            return;
        }
        if (typeof o !== 'object' || !(k in o)) {
            return;
        }
        o = o[k];
    }
    return o;
}
```


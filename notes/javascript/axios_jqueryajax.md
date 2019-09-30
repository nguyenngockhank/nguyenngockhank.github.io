# Axios vs. Jquery Ajax

[Docs of Jquery](https://api.jquery.com/jQuery.ajax/)
[Docs of Jquery](https://github.com/axios/axios)

Nhìn chung thì cũng đều có mục đích là nơi wrap lại phần xử lý AJAX của ứng dụng  :))) 



## Basic 

Xem sơ cách xài 2 thứ 

```js
// axios
axios.get('/user/12345').then(function(response) {
    const { data, status } = response;
})

// jquery
$.get( "/user/12345", function( data, textStatus , jqXHR ) {
})
```

## Set header `Authenication token`

```js
// axios
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.timeout = 2000;

// jquery 
$.ajaxSetup({
    timeout: 2000,
    headers: {
        'Authorization': AUTH_TOKEN
    }
});
```

## Interceptors

### Request Interceptors

```js
// axios
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
});


// jquery 
$.ajaxSetup({
    beforeSend: function (xhr, settings) {
        // Do something before request is sent
        console.log(settings.data);
        console.log(settings.url);
    }
});
```

### Response Interceptors

```js
// axios
axios.interceptors.response.use(function (response) {
   // Do something with response data
    return response;
});


// jquery 
$.ajaxSetup({
    dataFilter: function (data, type) {
        // Do something with data
        return data;
    }
});
```
---


# Khác bọt chính 


## Jquery - load

JQuery thư viện phổ biến nhất hành tinh về việc xử lý DOM... tất nhiên cũng có 1 trick khá hay đó là

Lấy data html về cho phần tử :)) rất là mì ăn liền... 

Có thể sử dụng vào case như show modal với content khác nhau: 

```js
// template
$(selector).load(URL, data,callback);

// usage example: 
$("#user_info_modal").load("http://example.com/api/user_info/2"); 
```

## Axios - Node

Có thể sử dụng tại backend server (node) 

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

## Axios - instance

Phù hợp với ứng dụng có nhiều API endpoint khác nhau, nhiều token, setup khác nhau 

```js
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 10000,
    headers: { 'X-Custom-Header': 'foobar' }
});

// modify
instance.defaults.timeout = 2500;
```
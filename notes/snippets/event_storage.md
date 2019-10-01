# Event Storage

[Xem thêm tại đây](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event)

Sử dụng để đồng bộ dữ liệu giữa các tab, và nhìn có vẻ như realtime =))

## Vấn đề

Tính năng: `Accept Cookie Preferences` 
- Hiển thị cái `popup` khi User chưa nhấn nút accept
- User mở nhiều tabs, tab nào cũng hiển thị cái `popup` vì người dùng accept
- User accept -> tắt `popup` màn trên tab hiện tại 
- Những tab khác cũng tự tắt cái `popup`


## Giải quyết

Lợi dụng vào `built-in event` của storage để liên lạc giữa các tab ^^!

```javascript
window.addEventListener("storage", function(e) {
    // your code ...
});
```


## My Code

Implemented by Khank

### Demo
Mở 2 tab và quan sát :D [Xem demo tại đây](https://nguyenngockhank.github.io/demo/event_storage.html)

### EventStorageFactory

```javascript
function randomString(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function parseJSON(v) {
    try {
        return JSON.parse(v);
    } catch (e) {  }
    return false 
}


var EventStorageFactory = function () {
    var factoryInstance = {};


    function EventStorage(config) {
        var instance = {};
        if (!config || !config.prefix) {
            console.warn('`EventStorage` needs valid config!');
            return {};
        }

        var PREFIX_DATASTORE = config.prefix; // 
        var KEY_DATASTORE = '';
        var onReceive = config.listen;
        var listenPrefixes = [];

        function generateKey() {
            KEY_DATASTORE = PREFIX_DATASTORE + randomString(4) + Date.now();
            listenPrefixes.push(PREFIX_DATASTORE)
        }

        function eventValid(name) {
            var pre = listenPrefixes.filter(function(prefix) {
                return name.startsWith(prefix);
            });
            return pre.length > 0;
        }


        function startEvents() {
            // load 
            window.addEventListener("storage", function(e) {
                var key = e.key;
                // same tab
                if (key === KEY_DATASTORE) {
                    return;
                }

                /// not the relevant event ...
                if (!eventValid(key)) { 
                    return;
                }

                var values = parseJSON(e.newValue);

                if (onReceive) onReceive(values);
            }, false);

            /// unload 
            window.addEventListener('unload', function(event) {
                localStorage.removeItem(KEY_DATASTORE);
            });
        }

        instance.fire = function(value) {
            localStorage[KEY_DATASTORE] = JSON.stringify(value);
        }

        instance.init = function() {
            generateKey();
            startEvents();
        }

        return instance;
    }


    factoryInstance.create = function (config) {
        var eventIns = EventStorage(config);
        eventIns.init();
        return eventIns;
    }

    return factoryInstance;
}();
```

### Sử dụng

```javascript
// create event store 
var eventStore = EventStorageFactory.create({
    prefix: 'ACCEPT_COOKIE',
    listen: (value) => {
        if( value && value.action === 'accepted') {
            processAccepting()
        }
    }
});
```


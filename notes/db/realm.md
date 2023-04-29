# Realm

## Install with React Native

https://www.npmjs.com/package/@realm/react

```sh
npm install realm @realm/react
```

## How to fast insert a JSON into Realm Database for a React Native App? 

https://stackoverflow.com/questions/50937202/how-to-fast-insert-a-json-into-realm-database-for-a-react-native-app

```js
let objs = JSON.parse('[{"EventID":"3769","EventName":"Birthday Party","EventDate":"Jun 21 2018  4:00 PM"},{"EventID":"4232","EventName":"Homecoming","EventDate":"Jun 22 2018 11:00 PM"}, {"EventID":"3838","EventName":"the Summer Show","EventDate":"Jun 28 2018  2:00 AM"}]');

realm.write(() => {
    objs.forEach(obj => {
        realm.create('Event', obj);
    });
});
```


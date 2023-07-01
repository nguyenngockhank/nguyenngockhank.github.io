# Firebase 

Because I used it free, so it deserved free PR here 

> Firebase helps mobile and web app teams succeed

All of things, I'm concerned about Firebase, are relevant to web.


## Install 

[Full doc here](https://firebase.google.com/docs/web/setup)


### 1. SDK JS

```
npm install --save firebase
```

### 2. Choose Products

To include only specific Firebase products (like Authentication and Database Realtime),

```js
// Firebase App (the core Firebase SDK) 
// is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";
```

### 3. Initilize App

Assume we need to set up **Database Realtime**

[See here](https://firebase.google.com/docs/database/web/start) for more detail 

```js
// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com",
    appId: "app-id",
};

firebase.initializeApp(config);
```

## authentication

Let's choose Google for example 

### 1. Create Provider

```js
var authProvider = new firebase.auth.GoogleAuthProvider();
```

### 2. Request Sign In

```js
var result = await firebase.auth().signInWithPopup(authProvider);

// after user authenicated, you will have some info below
var token = result.credential.accessToken;
// The signed-in user info.
var user = result.user;
```

Or you can receive the result through the hook

```js
 firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
         // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
    } else {
        // User is signed out.
    }
});
```


## Database Realtime 

### 1. Add Config 

The same with [Step 3 in Install](#_3-initilize-app) . Then,

```js
// Get a reference to the database service
var database = firebase.database();
```

### 2. Read

Assume we have data structure like this:

```json
{
    "categories": {
        "cat_id1": {
            // cat data
        },
        "cat_id2": {
            // cat data
        },
    },
    "users": {
        "user_id1": {
            // data
        }
    }
}

```

Then our code looks like this:

:::: tabs

::: tab Callback
Set up a callback to receive new data
```js
var categoriesRef = database.ref('/categories');

categoriesRef.on('value', function(snapshot) {
    doSomething(snapshot.val());
});
```
:::

::: tab Read once

You just want to read data once:
```js
let snapshot = await database.ref('/categories').once('value'); 
let val = snapshot.val();
```
:::
::::

### 3. Write

:::: tabs

::: tab Basic

Using `set()` overwrites data at the specified location, including any child nodes.

```js
firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
});
```
:::

::: tab Update

When calling `update()`, you can update lower-level child values by specifying a path for the key. If data is stored in multiple locations to scale better, you can update all instances of that data using data fan-out.

```js
// Get a key for a new Post.
var newPostKey = firebase.database().ref().child('posts').push().key;

// Write the new post's data simultaneously 
// in the posts list and the user's post list.
var updates = {};
updates['/posts/' + newPostKey] = postData;
updates['/user-posts/' + uid + '/' + newPostKey] = postData;

return firebase.database().ref().update(updates);
```
:::

::: tab Remove
Just use `remove()`
```js
firebase.database().ref(`users/${userId}/post/${postId}`).remove();
```
:::

::::



### 4. Sercurity Rule

- `categories`: can be only read from the outside and manage in Firebase Console
- `users`: user can only read & write on his own data


```json
{
  "rules": {
    "categories": {
      ".read": true,
    },
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

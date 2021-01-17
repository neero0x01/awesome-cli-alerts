# awesome-cli-alerts

## Install

```sh
npm install cli-alerts
```

<br>

## Usage

```js
const alert = require('awesome-cli-alerts');

// privide the message type and msg
alert({type: 'success', msg: 'Everything\'s fine'});
// prints: ✔ SUCCESS Everything's fine

alert({type: 'info', msg: 'I am new to Open Source!!'});
// Prints: ⚠ INFO I am new to Open Source!!


alert({type: 'warning', msg: 'You forgot something!'});
// Prints: ℹ INFO You forgot something!


alert({type: 'error', msg: 'Something went wrong!'});
// Prints: ✖ ERROR Something went wrong!



```




const alert = require('./index.js');

alert();
alert({
  type: `success`,
  msg: `All done`
});
alert({
  type: `warning`,
  msg: `something's off`
});
alert({
  type: `error`,
  msg: `something bad happened`
});
alert({
  type: `info`,
  msg: `You're awesome!`
});




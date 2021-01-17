/**
 * Awesome Cli Alerts
 *
 * Cross Platform CLI Alerts with colors support.
 * Works on MacOS, Linux and Windows.
 * Alert: `success`, `info`, `warning`, `error`
 *
 * @author Muhammad Ahmad <https://github.com/neero0x01/>
 */

const chalk = require('chalk');
const symbols = require('log-symbols');
const green = chalk.green;
const greenI = chalk.green.inverse;
const red = chalk.red;
const redI = chalk.red.bold.inverse;
const orange = chalk.keyword('orange');
const orangeI = chalk.keyword('orange').inverse;
const blue = chalk.blue;
const blueI = chalk.blue.inverse;


module.exports = (options) => {
  const defaultOptions = {
    type: `error`,
    msg: `You forgot to define all options`
  };
  const opts = {...defaultOptions, ...options};
  const {type, msg} = opts;

  if(type === `success`) {
    console.log(`\n${symbols.success} ${greenI(` WARNING `)}  ${green(msg)}}\n`);
  }
  if(type === `error`) {
    console.log(`\n${symbols.error} ${redI(` ERROR `)}  ${red(msg)}\n`);
  }
  if(type === `warning`) {
    console.log(`\n${symbols.warning} ${orangeI(` WARNING `)}  ${orange(msg)}\n`);
  }
  if(type === `info`) {
    console.log(`\n${symbols.info} ${blueI(` INFO `)}  ${blue(msg)}\n`);
  }
}

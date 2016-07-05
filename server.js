import fetch from 'node-fetch';

async function main() {
  const response = await fetch("http://api.dronestre.am/data");
  const strikes = await response.json();
  console.log(strikes.strike[0]);
  console.log(`Strike Count: ${strikes.strike.length}`)
}

main();

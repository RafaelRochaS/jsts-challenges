const asterisk = '[*]'.yellow;
const done = '[+]'.blue;
const alert = '[-]'.red

export function timing(fn, ...args) {
  console.log(`\n[*] Timing ${fn.name}...`);
  printAsterisk();
  console.log(`Arguments: ${args}`);
  console.log('[*] Execution:\n----------------------------');
  console.time(`${fn.name}`);
  fn(...args);
  console.timeEnd(`${fn.name}`);
  console.log(`----------------------------\n[+] ${fn.name} done`);
}

console.log('\x1b[33m', '[*] ');
console.log('\x1b[34m', '[+] ');
console.log('\x1b[31m', '[-] ');

function printAsterisk() {
  process.stdout.write('\x1b[33m', '[*] ');
  console.log('\x1b[0m');
}
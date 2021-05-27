import chalk from "chalk";

export function timing(fn, ...args) {
  
  console.log(chalk.yellow('\n[*]'), `Timing ${fn.name}...`);
  console.log(chalk.yellow('[*]'), 'Arguments: ', args);
  console.log(chalk.yellow('[*]'),'Execution:\n----------------------------');
  console.time(`${fn.name}`);
  try {
    fn(...args);
  } catch (error) {
    console.log(chalk.red('[-]'), `execution failed: ${error.message}`);
  }
  console.timeEnd(`${fn.name}`);
  console.log('----------------------------');
  console.log(chalk.green('[+]'), `${fn.name} done\n`);
}

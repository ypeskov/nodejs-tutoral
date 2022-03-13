const log = console.log;

dothings();

async function dothings() {
  let p = await delay(1000);
  log('qqq');
  log(p);
  log('+++')
}

function delay(ms) {
  return new Promise((resolve, reject) => {
    // resolve(ms);
    reject(new Error('bad things'));
  });
}
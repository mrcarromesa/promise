const resolve = require('./utils/resolve');

const call = async () => {
  const numbers = [...Array(6).keys()]

  const results = [];

  for (const item of numbers) {
    const ms = item % 2 === 0 ? 500 : 1500;
    const time = item * ms;
    const value = await resolve.resolveAfterTimeout(time, item);
    results.push({item, value, time });
  }

  console.log({results});
}

call();
const arrayUtils = require('./utils/chunk');
const resolve = require('./utils/resolve');

const call = async () => {
  const numbers = [...Array(10).keys()];

  const numberReqForTime = arrayUtils.arrayChunk(numbers, 2);

  const results = [];

  let count = 0;
  for (const numbersReq of numberReqForTime) {
    await Promise.all(numbersReq.map(async (item) => {
      const ms = item % 2 !== 0 ? 500 : 1500;
      const time = item * ms;
      const value = await resolve.resolveAfterTimeout(time, `${count}_${item}`);
      results.push({ order: `${count}_${item}`, item, value, time});
      return item;
    }));
    count += 1;
  }

  console.log({results});
}

call();
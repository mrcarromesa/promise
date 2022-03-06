const resolveAfterTimeout = async (i, j) => {
  return new Promise(resolve => {
    console.log(`CALLED ${j} => time seted: ${i}`);
    setTimeout(() => {
      resolve(`RESOLVED ${j}`);
    }, i);
  });
};

exports.resolveAfterTimeout = resolveAfterTimeout;
const band = (name) => {
  return new Promise((resolve, reject) => {
    if (name === 'BandName') {
        resolve(
        {  
          success: true,
          data: {
            name: `name is ${name}`
          }
        } 
      )
    }

    reject('band not found')
  });
} 

const song = (response) => {
  return new Promise((resolve, reject) => {
    if (response.success) {
      resolve({
        data: {
          name: `song from ${response.data.name}`
        }
      });
    }

    reject('song not found');

  });
}

band('BandName').then((res) =>
  {
    console.log('verify band...');
    return song(res);
  }
).then((res) => {
  console.log('verify song...');
  console.log(res);
}).catch((res) => {
  console.log('err => ', res)
});
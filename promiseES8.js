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

const todoJob = async () => {
  try {
    const bandResult = await band('BandName');
    console.log(bandResult);
    const songResult = await song(bandResult);
    console.log(songResult);

  } catch (err) {
    console.log(err);
  }
}

todoJob();
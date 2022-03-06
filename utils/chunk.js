const arrayChunk = (arr, chunk) => {
  return arr.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index/chunk)
  
    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }
  
    resultArray[chunkIndex].push(item)
  
    return resultArray
  }, [])
}

exports.arrayChunk = arrayChunk;
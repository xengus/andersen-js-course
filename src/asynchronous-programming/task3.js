function delay(ms) {
  return new Promise((resolve)=> {
    setTimeout(()=> {
      resolve(100)
    }, ms)
  })
}

delay(500).then(value => console.log('Done with ' + value));

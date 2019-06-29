const urls = [
  'http://www.json-generator.com/api/json/get/cevhxOsZnS',
  'http://www.json-generator.com/api/json/get/cguaPsRxAi',
  'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
  'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
  'http://www.json-generator.com/api/json/get/ceQMMKpidK'
]

async function parallelData(urls) {
  const [res1, res2, res3, res4, res5] = await Promise.all(urls.map(url => fetch(url).then(response => response.json))).then(data =>
    console.log(data)
  );
  return [res1, res2, res3, res4, res5]
}

 
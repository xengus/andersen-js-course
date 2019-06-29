function parseJSON (jsonStr, succesCb, failureCb) {
  try {
    succesCb(JSON.parse(jsonStr))
  } catch (error) {
    failureCb(error)
  }
  
}
function succesCb(result) {
  console.log('Succes parse');
  console.log(result);
  return
  }
function failureCb(error) {
  console.log('Error parse');
  console.log('Error');
  return
}
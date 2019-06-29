const asyncBar = async() => 'Some string';
async function foo() {
  console.log(await asyncBar());
}

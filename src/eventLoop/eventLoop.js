
const myPromise = new Promise(function(resolve, reject) {
  resolve([{ name: "Chris" }]);
});
async function getData() {
  const data = await myPromise;
  return data;
}
getData().then(data => console.log(data));
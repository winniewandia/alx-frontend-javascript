export default function handleResponseFromAPI(promise) {
  return promise.then((response, reject) => {
    console.log('Got a response from the API');
    response({ status: 200, body: 'success' });
    reject(new Error());
  });
}

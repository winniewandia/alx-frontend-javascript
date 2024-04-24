export default function handleResponseFromAPI(promise) {
  promise.then((response, reject) => {
    console.log('Got a response from the API');
    return response({ status: 200, body: 'success' });
  })
    .catch(() => {
      return new Error();
    });
}

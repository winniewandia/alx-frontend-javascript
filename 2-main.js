import handleResponseFromAPI from "./0x01-ES6_promise/2-then";

const promise = Promise.resolve(123);
handleResponseFromAPI(promise);
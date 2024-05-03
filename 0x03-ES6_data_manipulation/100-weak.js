export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const num = weakMap.get(endpoint);
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
    if (num >= 5) {
      throw Error('Endpoint load is high');
    }
  } else {
    weakMap.set(endpoint, 1);
  }
}

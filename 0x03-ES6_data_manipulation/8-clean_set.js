export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  let result = '';
  set.forEach((element) => {
    if (element && element.startsWith(startString)) {
      result += `${element.replace(startString, '')}-`;
    }
  });
  return result.slice(0, -1);
}

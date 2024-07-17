export default function iterateThroughObject(reportWithIterator) {
  // It should return every employee name in a string, separated by |
  return [...reportWithIterator].join(' | ');
}

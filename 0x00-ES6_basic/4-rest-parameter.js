export default function returnHowManyArguments(...args) {
  let number = 0;
  const len = args.length;

  for (let i = 0; i < len; i += 1) {
    number += 1;
  }
  return number;
}

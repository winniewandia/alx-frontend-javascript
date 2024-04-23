export default function returnHowManyArguments(...args) {
  let number = 0;
  const len = args.length;

  for (let i = 0; i < len
    ; i++) {
    number += 1;
  }
  return number;
}

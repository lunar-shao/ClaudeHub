const prompt = require("prompt-sync")();

export const askYesNo = (msg: string) => prompt(msg + " (y/n)").match(/^y(es)?$/i) ? true : false;

export function parseStringToNumbers(string: string): number[] {
  const numbers = [];
  for (const [, beginStr, endStr] of string.matchAll(/(\d+)(?:-(\d+))?/g)) {
      const [begin, end] = [beginStr, endStr].map(Number);
      numbers.push(begin);
      if (endStr !== undefined) {
          for (let num = begin + 1; num <= end; num++) {
            numbers.push(num);
        }
      }
  }
  return numbers;
}

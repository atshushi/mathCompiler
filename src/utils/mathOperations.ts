import { parseCode } from './methods';

export default {
  sum: {
    eval: (code: string) => parseCode(code).reduce((prev, after) => prev + after, 0),
  },
  subtract: {
    eval: (code: string) => parseCode(code).reduce((prev, after) => prev - after, 0),
  },
  multiply: {
    eval: (code: string) => parseCode(code).reduce((prev, after) => prev * after, 0),
  },
  divide: {
    eval: (code: string) => parseCode(code).reduce((prev, after) => prev / after, 0),
  },
  pow: {
    eval: (code: string) => {
      const [ base, exponent ] = parseCode(code);
      return Math.pow(base, exponent);
    },
  },
  sqrt: {
    eval: (code: string) => Math.sqrt(+code),
  },
  ceil: {
    eval: (code: string) => Math.ceil(+code),
  },
  log: {
    eval: (code: string) => Math.log(+code),
  },
  max: {
    eval: (code: string) => Math.max(...parseCode(code)),
  },
  min: {
    eval: (code: string) => Math.min(...parseCode(code)),
  },
  numbertofraction: {
    eval: (code: string) => {
      let denominator = 1;

      for (; (+code * denominator) % 1 !== 0; denominator++);
      return `${+code * denominator}/${denominator}`;
    },
  },
  numberstopercent: {
    eval: (code: string) => {
      const [ part, total ] = parseCode(code);
      return (part / 100) * total;
    },
  },
  abbreviatenumber: {
    eval: (code: string) => Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 2,
    }).format(+code),
  },
};

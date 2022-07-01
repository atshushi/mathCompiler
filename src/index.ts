import mathOperations from './utils/mathOperations';

export default (code: string) => {
  const operation = Object.keys(mathOperations).join('|');
  const regex = new RegExp(`(${operation})\\((?:\\[?(\\d|,|\\s|\\.)+)\\]?\\)`, 'gm');

  return code.replace(regex, (match) => {
    const [ op, params ] = match.split('(').map((s, i) => !i ? s : s.slice(0, -1));

    return mathOperations[op].eval(params);
  });
};

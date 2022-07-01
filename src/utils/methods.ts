import { InvalidInput } from '../errors/InvalidInput';

export const parseCode = (code: string) => {
  if (!(code.startsWith('[') && code.endsWith(']')) || code.length <= 1)
    throw new InvalidInput();

  return code.slice(1, -1)
    .split(',')
    .map((c) => (c.trim(), +c));
};

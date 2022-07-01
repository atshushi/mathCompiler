export class InvalidInput extends Error {
  constructor () {
    super('Your code must be an array with more than two elements: sum([1, 2]);');

    this.name = 'InvalidInput';
  }
}

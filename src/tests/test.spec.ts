import compileMath from '../index';

test('should 1 + 1', () => {
  expect(compileMath('sum([1, 1])'))
    .toBe('2');
});

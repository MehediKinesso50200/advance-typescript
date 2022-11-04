import {expect, it} from 'vitest';
import { Equal, Expect } from '../helpers/type-utils';

const returnBothOfWhatIPassIn = (a: unknown, b: unknown) => {};

it('Should return a tuple of the arguments you pass', () => {
  const result = returnBothOfWhatIPassIn('a', 1);

  expect(result).toEqual({
    a: 'a',
    b: 1
  });

  type test1 = Expect<
    Equal<
      typeof result,
      {
        a: string;
        b: number;
      }
    >
  >;
});
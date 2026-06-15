import { describe, test, expect } from 'vitest';
import { fizzBuzz } from '../src/fizzBuzz';

describe('fizzBuzz', () => {
  test('should return "1" when input is 1', () => {
    // Arrange
    const input: number = 1;
    const expected: string = '1';

    // Act
    const result: string = fizzBuzz(input);

    // Assert
    expect(result).toBe(expected);
  });

});
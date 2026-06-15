# FizzBuzz Kata

## Rules

Write a function `fizzBuzz(n: number): string` that returns:
- `"Fizz"` for multiples of 3
- `"Buzz"` for multiples of 5
- `"FizzBuzz"` for multiples of both 3 and 5
- the number as a string for all other inputs

## Test List

Work through these in order — each one forces a small, specific change:

| # | Input | Expected | Why |
|---|-------|----------|-----|
| 1 | 1 | "1" | plain number |
| 2 | 2 | "2" | plain number |
| 3 | 3 | "Fizz" | multiple of 3 |
| 4 | 4 | "4" | plain number (triangulate) |
| 5 | 5 | "Buzz" | multiple of 5 |
| 6 | 6 | "Fizz" | multiple of 3 again |
| 7 | 9 | "Fizz" | non-trivial multiple of 3 |
| 8 | 10 | "Buzz" | non-trivial multiple of 5 |
| 9 | 15 | "FizzBuzz" | multiple of both — the tricky case |
| 10 | 30 | "FizzBuzz" | second FizzBuzz to triangulate |

## Starting Point

1. Write your first failing test in `tests/fizzBuzz.test.ts` - for example test #1 from the list above. Use this skeleton as a starting hint:

   ```ts
   import { describe, test, expect } from 'vitest';
   import { fizzBuzz } from '../src/fizzBuzz';

   describe('fizzBuzz', () => {
     test('should ... when ...', () => {
       // Arrange

       // Act

       // Assert
     });
   });
   ```

2. Then add the minimal skeleton in `src/fizzBuzz.ts` — just enough for the test to compile and fail:

   ```ts
   export function fizzBuzz(n: number): string {
     return '';
   }
   ```

/*
==> Types of Tests (simple view)
    1) Unit Test → test one function/service in isolation.
    2) Integration Test → test multiple parts together.
    3) E2E Test → test the whole app like a real user.
*/
/*
==> Jest what?
    ->  Jest is a testing framework for JavaScript that was developed by Facebook. 
        It is used to test code written in Node.js, React, and other JavaScript frameworks.
    ->  Test files should be named *.test.js or *.spec.js.
*/
/*
==> Jest Basics (syntax)
*/
describe('Math Utils', () => {
    it('should add numbers', () => {
      const sum = 2 + 3;
      expect(sum).toBe(5);   // ✅ Pass
    });
  
    it('should compare objects', () => {
      const user = { name: 'Ravi' };
      expect(user).toEqual({ name: 'Ravi' }); // ✅ Deep comparison
    });
  });

/*
==> Key functions:
    ->  describe() → groups related tests.
    ->  it() / test() → defines one test case.
    ->  expect(value) → assertion function.
    ->  toBe, toEqual, toContain, toThrow, etc. → matchers.
  */
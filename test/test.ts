import assert from 'assert';
import { describe, it } from 'mocha';

// Below is a harmless sample test. Please replace with your .ts tests in this folder.
// See https://adrianhall.github.io/web/2018/07/04/run-typescript-mocha-tests-in-vscode/
//  for more details on TypeScript + Mocha + VSCode.
describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


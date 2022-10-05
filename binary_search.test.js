var {describe, expect, test} = require('@jest/globals');
var binary_search = require('./binary_search.js');

describe('Testcase 1 - when all elements are distinct', () => {

    let input1 = [8, 9, 14, 17, 25, 32, 36, 38, 41, 45, 46, 47, 59, 75, 77, 82, 84, 84, 94, 100, 103]

    test('if the element in the first half of array can be found correctly', () => {
      expect(binary_search(input1, 25)).toEqual(4);
    });

    test('if the element in the last half of array can be found correctly', () => {
        expect(binary_search(input1, 100)).toEqual(19);
      });

    test('if the middle element can be found correctly', () => {
        expect(binary_search(input1, 46)).toEqual(10);
      });

    test('if the algorithm returns -1 when search element is not present in the array', () => {
        expect(binary_search(input1, 51)).toEqual(-1);
      });
  });

describe('Testcase 2 - when some elements are repeated', () => {

    let input1 = [1, 7, 7, 7, 10, 21, 21, 34, 43, 56, 56, 56, 78, 78, 101, 103, 103]

    test('if the element in the first half of array which is not repeated can be found correctly', () => {
      expect(binary_search(input1, 34)).toEqual(7);
    });

    test('if the element in the first half of array which is repeated can be found correctly', () => {
        expect(binary_search(input1, 7)).toEqual(3);
      });

    test('if the element in the last half which is not repeated of array can be found correctly', () => {
        expect(binary_search(input1, 101)).toEqual(14);
      });

    test('if the element in the last half which is repeated of array can be found correctly', () => {
        expect(binary_search(input1, 78)).toEqual(12);
      });

    test('if the middle element can be found correctly', () => {
        expect(binary_search(input1, 43)).toEqual(8);
      });

    test('if the algorithm returns -1 when search element is not present in the array', () => {
        expect(binary_search(input1, 3)).toEqual(-1);
      });
  });

describe('Testcase 3 - when all elements are repeated', () => {

    let input1 = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]

    test('if the element present can be found correctly', () => {
      expect(binary_search(input1, 8)).toEqual(6);
    });

    test('if the algorithm returns -1 when search element is not present in the array', () => {
        expect(binary_search(input1, 14)).toEqual(-1);
      });
  });
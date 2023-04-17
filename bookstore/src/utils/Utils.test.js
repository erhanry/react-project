import { BGN, serializedBoolean } from './Utils';

describe('Utils', () => {

  test('Serialized Boolean', () => {

    let boolean = 1;

    const actualResult = serializedBoolean(boolean);

    expect(actualResult).toBe(true);
  });

  test('Currency BGN', () => {

    let num = 1955.8;
    const country = "1,955.80 лв.";

    const result = BGN(num);

    expect(result).toMatch(country);
  });

});
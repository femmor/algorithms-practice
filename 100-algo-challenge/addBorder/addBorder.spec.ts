import { addFrame } from './addBorder';

describe(addFrame.name, () => {
  it('Test 1', () => {
    // arrange
    const data = ['abc', 'ded'];

    // act
    const response = addFrame(data, '*');

    // assert
    expect(response.length).toBe(4);
  });
});

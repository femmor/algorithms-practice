// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

export function addFrame(picture: string[], char: string): string[] {
  // Create the frames "*****"
  const outerFrame = char.repeat(picture[0].length + 2);

  picture.push(outerFrame);
  picture.unshift(outerFrame);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = char.concat(picture[i], char);
  }

  return picture;
}

console.log(addFrame(['abc', 'ded'], '*'));

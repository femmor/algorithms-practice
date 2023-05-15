// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

export function addFrame(picture: string[]): string[] {
  // Create the wall
  const wall = '*'.repeat(picture[0].length + 2);

  // Add the wall to the beginning and end of picture
  picture.unshift(wall);
  picture.push(wall);

  // Loop through the picture and add * to the beginning and end of each word
  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = '*'.concat(picture[i], '*');
  }

  return picture;
}

console.log(addFrame(['abc', 'ded']));

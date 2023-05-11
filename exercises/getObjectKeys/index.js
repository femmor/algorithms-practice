// Get Object Keys
const person = {
  name: 'John',
  age: 30,
};

// const result = Object.entries(person);
// console.log(result);

const getObjKeys = (obj) => {
  // Get the object keys
  const objKeys = Object.keys(obj);

  // Get the object values
  const result = objKeys.map((key) => {
    const value = obj[key];
    return [key, value];
  });

  return result;
};

console.log(getObjKeys(person));

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  }
}

async function test(title, callback) {
  try {
    await callback();
    console.log('Successfully');
  } catch (error) {
    console.error('Something wrong: ', title);
    console.error(error);
  }
}

global.test = test;
global.test = expect;

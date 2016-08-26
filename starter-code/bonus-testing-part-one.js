/* Welcome to an intro to testing! This practice module
    will allow you to become familiar with testing concepts.
    We test to check the I/O of our apps. That is - we are not
    checking for HOW something works, but the end RESULT and
    state of a particular place in our application.
*/


/* Below is a basic example of a test "framework" where
    our test is a function that we can reuse to check against
    different components of our application.
    We test for failing functionality first to then refactor
    the test to pass.

    This is common practice in testing ('red-green' refactoring).
*/

function assert(expression, successMessage, failureMessage) {
  var currentTest = assert.caller.name;
  if (expression) {
    return console.log('\n' + currentTest +
      ' test passing:', successMessage
    );
  }
  console.log('\n' + currentTest +
      ' test failing:', failureMessage
    );
}

//  Below, we will write an example of our test in action:

var ricksFaveAnimal = 'penguin';

(function isString() {
  assert(
    typeof(ricksFaveAnimal) === 'string',
    'ricksFaveAnimal is a string primitive.',
    'ricksFaveAnimal should be a valid string, but is currently "' + ricksFaveAnimal + '".'
  );
})();

(function emptyString() {
  assert(
    ricksFaveAnimal.trim().length,
    'ricksFaveAnimal is a string with content.',
    'ricksFaveAnimal is an empty string!'
  );
})();

/* ========================================================================
------------------------- Favorite Animals --------------------------------
===========================================================================
The zoo is closing in 20 minutes. You still haven't seen your four favorite
animals. You only have time for one. How do you choose just one?!
*/

var favoriteAnimals = ['elephants', 'penguins', 'eagles', 'camels'];
var nextAnimal;


/* TODO:
Write a test FIRST! Complete the `assert()` function below to ensure
that an element in the favoriteAnimals array was assigned to nextAnimal.

Remember to: pass in your expression, and write a success and a failure
message. */

function faveAnimal() {
  assert(
    favoriteAnimals.indexOf(nextAnimal) !== -1,
    'Hooray! We get to see the ' + nextAnimal + ' next!',
    'Bummer ... "' + nextAnimal + '" is not on our list.'
  );
};

/* TODO:
Now assign one of your favorite animals dynamically, by chance, to the
nextAnimal variable ... then invoke your test!   :-)
Your code begins on the next line: */

function chooseAnimal() {
  var choices = favoriteAnimals.length;
  var idx = Math.floor(Math.random() * choices);
  return favoriteAnimals[idx];
};

nextAnimal = chooseAnimal();
faveAnimal();

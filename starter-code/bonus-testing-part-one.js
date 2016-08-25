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
  if (expression) {
    return console.log('test passing:', successMessage);
  }
  console.log('test failing:', failureMessage);
}

//  Below, we will write an example of our test in action:

var ricksFaveAnimal = ' ';

exampleTest = function() {
  assert(
    (ricksFaveAnimal.trim().length) &&
    typeof(ricksFaveAnimal) === 'string',
    'ricksFaveAnimal is a valid string and is currently: ' + ricksFaveAnimal,
    'Oh No! ricksFaveAnimal should be a valid string, but is currently: "' + ricksFaveAnimal + '"'
  );
};
exampleTest();

/* ========================================================================
------------------------- Favorite Animals --------------------------------
===========================================================================
The zoo is closing in 20 minutes. You still haven't seen your four favorite
animals. You only have time for one. How do you choose just one?!
*/


var favoriteAnimals = ['elephants', 'penguins', 'eagles', 'camels'];
var randomAnimal = Math.floor(Math.random()*favoriteAnimals.length);
var nextAnimal = favoriteAnimals[randomAnimal];

/* TODO: DONE
Now assign one of your favorite animals dynamically, by chance, to the
nextAnimal variable ... then invoke your test!   :-)
Your code begins on the next line: */


/* TODO: DONE
Write a test FIRST! Use the `assert()` function below to ensure
that an element in the favoriteAnimals array was assigned to nextAnimal.

No hard-coded results allowed! (e.g. -  seeing if nextAnimal is equal to
just 'penguin').
Remember to: pass in your expression, and write a success and a failure
message. */

function testWork() {
  for (var i = 0; i < favoriteAnimals.length; i++) {
    var thisAnimal = favoriteAnimals[i];
    if (thisAnimal === nextAnimal) {
      return true;
    }
  }
};

faveAnimalTest = function() {
  assert(!(favoriteAnimals.indexOf(nextAnimal) === -1),
    'Great Choice go check out the ' + nextAnimal,
    nextAnimal + ' is not one of your favorite animals'
  );
};

faveAnimalTest();

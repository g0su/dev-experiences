/**
 * Questions 1: Closures raise your hand
 * Consider the following functions clickHandler, immediate, and delayedReload:
 */

let countClicks = 0;
button.addEventListener('click', function clickHandler() {
    countClicks++;
});

const result = (function immediate(number) {
    const message = `number is: ${number}`;
    return message;
})(100);

setTimeout(function delayedReload() {
    location.reload();
}, 1000);

/**
 * clickHandler accesses the variable countClicks from the outer scope.
 * immediate doesn’t access any variables from the outer scope.
 * delayedReload accesses the global variable location from the global scope (aka the outermost scope).
 */

/**
 * Questions 2: Lost in parameters
 * What will log to console the following code snippet:
 */

(function immediateA(a) {
    return (function immediateB(b) {
        console.log(a); // What is logged?
    })(1);
})(0);

/**
 * 0 is logged to the console.
 */

/**
 * Questions 3: Who’s who
 * What will log to console the following code snippet:
 */

let count = 0;
(function immediate() {
    if (count === 0) {
        let count = 1;
        console.log(count); // What is logged?
    }
    console.log(count); // What is logged?
})();

/**
 * 1 and 0 is logged to the console.
 */

/**
 * Questions 4: Tricky closure
 * What will log to console the following code snippet:
 */

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i); // What is logged?
    }, 1000);
}

/**
 * 3, 3, 3 is logged to console.
 */

/**
 * Questions 5: Right or wrong message
 * What will log to console the following code snippet:
 */

function createIncrement() {
    let count = 0;

    function increment() {
        count++;
    }

    let message = `Count is ${count}`;

    function log() {
        console.log(message);
    }

    return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?∏

/**
 * 'Count is 0' is logged to console
 * cause message's initial value is 'Count is 0'
 */


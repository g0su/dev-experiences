/**
 * 1. js is single-threaded.
 * 2. The promise is executed immediately after it is defined, but his resolve is asynchronous.
 * 3, the asynchronous priority of the promise is higher than setTimeout.
 * 4, async will return a promise object, the await keyword will give up the thread.
 */

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");

/**
 * console.log('script start')
 * => push to queue                     [ function () {console.log('setTimeout')} ]
 * execute async1:
 *  - console.log('async1 start')
 *  - execute async2 (all sync actions):
 *      - console.log('async2')
 *  - push the rest of await to queue:
 *      => push to queue                [ console.log('async1 end')               ]
 * console.log('promise1')
 * => push to queue                     [ console.log('promise2')                 ]
 * console.log('script end')
 * pop the queue
 *  - push to queue                     [ console.log('setTimeout')               ]
 *  - console.log('async1 end')
 *  - console.log('promise2')
 * pop the queue
 *  - console.log('setTimeout')
 */

console.log("script start");
console.log("async1 start");
console.log("async2");
console.log("promise1");
console.log("script end");
console.log("async1 end");
console.log("promise2");
console.log("setTimeout");

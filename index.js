// Node.js (which is the runtime environment that enables us
// to run our JavaScript outside the browser) 
// js

let count = 1;
while (count < 5) {
  debugger;
  if (count === 1) {
    console.log(`The loop has executed ${count} time.`);
  } else {
    console.log(`The loop has executed ${count} times.`);
  }
  count += 1;
  debugger;
}

const { setVariableInterval, clearVariableInterval } = require("./index");

function printName(invocationCount, user) {
  console.log(`Invoked ${invocationCount} times`, user.name);
}
function getInterval(invocationCount, user) {
  if (user.name === "Modi") {
    console.log("Stopping interval");
    return -1;
  }
  if (invocationCount === 1) {
    console.log("Invoking immediately the first time");
    return 0;
  }
  console.log("Scheduling next for", user.waitFor * invocationCount);
  return user.waitFor * invocationCount;
}
const user = {
  name: "Donald Trump",
  waitFor: 2000,
};

const interval1 = setVariableInterval(printName, getInterval, user);
const interval2 = setVariableInterval(printName, getInterval, user);

setTimeout(() => {
  user.name = "Vladimir Putin";
  user.waitFor = 500;
}, 5000);

// setTimeout(() => {
//   user.name = "Modi";
//   user.waitFor = 100;
// }, 15000);

setTimeout(() => {
  clearVariableInterval(interval1);
}, 15000);

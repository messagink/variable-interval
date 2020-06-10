
<h1  align="center">Welcome to variable-interval 👋</h1>

<p>

<img  alt="Version"  src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000"  />

<a  href="#"  target="_blank">

<img  alt="License: MIT"  src="https://img.shields.io/badge/License-MIT-yellow.svg"  />

</a>

<a  href="https://twitter.com/akarshitwal"  target="_blank">

<img  alt="Twitter: akarshitwal"  src="https://img.shields.io/twitter/follow/akarshitwal.svg?style=social"  />

</a>

</p>

  

Module to schedule a function to be invoked after a variable time, chosen on the fly.

  

### ✨ [Demo](https://messagink.com/story/5ee0e5d935f8e2d552c1836d/demo-variable-interval?autoScroll=true)

  

## Install

  

```sh

npm i -s variable-interval

```

  

## Usage

  

```js
const { setVariableInterval, clearVariableInterval } = require('variable-interval');

// invocationCount is count of how many times the function has been called, starting from 1.
async function makeRequest(invocationCount) {
	// Take the action
	// await doSomething();
}
function getWaitTime(invocationCount) {
	if (invocationCount === 10) {
		// Negative value stops the interval
		return -1;
	}
	return Math.pow(2, invocationCount)
}
const intervalId = setVariableInterval(makeRequest, getWaitTime);
// You can also clear the interval manually
setTimeout(() => clearVariableInterval(intervalId), 20 * 1000);
```

## API

#### setVariableInterval(exec, next, ...params)
This function schedule `exec` to be executed after time returned from the `next` function.
- exec: the function to be executed after each interval expires.
- next: the function that returns the time after which next call to exec will be made. A negative return value terminates the interval.
- params: any extra parameters passed would be passed to both exec and next.

Returns the `intervalId`(string) that can be used with `clearVariableInterval`
_the first parameter for both exec and next is the count of how many times they have been called_

#### setVariableInterval(intervalId)
This function will stop the scheduling of `exec` right away.
- intervalId: the intervalId obtained from `setVariableInterval`
  
#### setVariableInterval(exec, next, ...params)
## Maintainer

  

👤 **Akarshit Wal**

  

- Twitter: [@akarshitwal](https://twitter.com/akarshitwal)

- Github: [@akarshit](https://github.com/akarshit)

- LinkedIn: [@akarshit-wal](https://linkedin.com/in/akarshit-wal)

  

Thanks to [@akshendra](https://github.com/akshendra) for his inputs.

  

## Show your support

  

Give a ⭐️ if this project helped you!

  

---

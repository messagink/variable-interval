const _$intervalStore = {};

const _$makeid = () => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const setVariableInterval = (exec, next, ...args) => {
  const intervalId = _$makeid();
  _$intervalStore[intervalId] = {
    count: 1,
    timeoutId: null,
  };
  const recursiveHelper = async () => {
    const { count } = _$intervalStore[intervalId];
    await exec(count, ...args);
    _$intervalStore[intervalId].count += 1;
    let wait = 0;
    if (typeof next === "function") {
      wait = await next(count, ...args);
    } else if (typeof next === "number") {
      wait = next;
    }
    if (wait < 0) {
      // breaking the execution
      return;
    }
    _$intervalStore[intervalId].timeoutId = setTimeout(recursiveHelper, wait);
  };
  const initialRun = async () => {
    let initialWait = 0;
    if (typeof next === "function") {
      initialWait = await next(_$intervalStore[intervalId].count, ...args);
    } else if (typeof next === "number") {
      initialWait = next;
    }
    _$intervalStore[intervalId].timeoutId = setTimeout(
      recursiveHelper,
      initialWait
    );
  };
  initialRun();
  return intervalId;
};

const clearVariableInterval = (intervalId) => {
  const { timeoutId } = _$intervalStore[intervalId];
  clearTimeout(timeoutId);
};

module.exports = {
  setVariableInterval,
  clearVariableInterval,
};

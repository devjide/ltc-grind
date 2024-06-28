/* (https://bigfrontend.dev/problem/create-an-interval) */

let timerId = {};
const setInterval = (func, delay, period) => {
  let counter = 0;

  const helper = () => {
    let id = setTimeout(() => {
      func();

      helper();
    }, delay + period * counter);

    timerId.id = id;
    counter++;
  };

  helper();

  return timerId;
};

const myClearInterval = (id) => {
  clearTimeout(timerId.id);
};





function receivesAFunction(callBack) {
  callBack();
}

function returnsANamedFunction() {
  const namedFunction = function () {};
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function() {};
}
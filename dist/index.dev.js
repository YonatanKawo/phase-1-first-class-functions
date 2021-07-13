"use strict";

var receivesAFunction = function receivesAFunction(callback) {
  return callback();
};

var returnsANamedFunction = function returnsANamedFunction() {
  return returnsANamedFunction;
};
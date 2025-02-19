function foo(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

console.log(foo(NaN, NaN)); // false

//This is unexpected because NaN is not equal to anything, including itself.
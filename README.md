# Unexpected NaN comparison in JavaScript
This repository demonstrates an uncommon bug in JavaScript related to the comparison of NaN (Not a Number) values using the strict equality operator (===). 

## The Bug
The strict equality operator (===) in JavaScript returns 'false' when comparing NaN to NaN, which is counter-intuitive.  This is because NaN is designed to represent an undefined or unrepresentable numerical value.  Because of this, the standard comparison operators don't work as expected.

## The Solution
To reliably check for NaN, use the `Number.isNaN()` function which returns true if and only if a value is NaN.
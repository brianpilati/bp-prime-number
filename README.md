bp-prime-number
===============

A script that calculates prime numbers. 

The class should only be instantiated one because the class tracks previously known prime numbers and becomes more efficient with usage.

On a MacBook Pro 2.6 Ghz Intel Core i7 with 16 GB of 1600 MHz DDR3 memory.
The first 1230 prime numbers can be found (without seeding) in under 100 ms 
The first 10001 prime numbers can be found (with seeding) in under 5000ms

/*
  A class to determine if a number is prime

  Examples:

  var primeObj = new PrimeNumber();
  primeObj.isPrimeNumber(<number>);
*/

The latests version can be found here:
==============
./js/bp-prime-number-min.js

Unit Tests
==============
$ ./scripts/test.sh

Please note, the unit tests do some performance timings that require, on average, 5 seconds to complete. This is expected behavior.

Minify
==============
$ ./scripts/minify.sh


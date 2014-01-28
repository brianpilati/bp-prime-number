/*
  A class to determine if a number is prime

  Examples:

  var primeObj = new PrimeNumber();
  primeObj.isPrimeNumber(<number>);
*/

function PrimeNumber() {
  init: {
    this._knownPrimes = [1,2];
    this._startingNumber = undefined;
  }
}

PrimeNumber.prototype = {
  isPrimeNumber: function(primeNumber) {
    return this._calculatePrimeNumber(primeNumber, true);
  },

  _calculatePrimeNumber: function(primeNumber, isPrimeNumberCheck) {
    var isPrimeNumber = true;

    if (this._isPrimeNumberOneOrTwo(primeNumber)) {
      return true;
    }

    if (this._isPrimeNumberNotValid(primeNumber)) {
      return false;
    } else {
      var squareRoot = this._getSquareRoot(primeNumber);

      for (var index in this._knownPrimes) {
        var knownPrimeNumber = this._knownPrimes[index];
        if (this._isThePrimeNumberKnown(knownPrimeNumber, primeNumber)) {
          return true;
        } 
        if (this._isPrimeNumberDivisible(primeNumber, knownPrimeNumber)) {
          return false;
        }
        if (this._stopTestingKnownPrimes(knownPrimeNumber, squareRoot, primeNumber)) {
          break;
        }
      }

      this._setStartingNumber();
      while (this._continueTestingPrimeNumber(squareRoot)) {
        if (this._isPrimeNumberDivisible(primeNumber, this._startingNumber)) {
          return false;
        }
        this._incStartingNumber();
      }
    }

    this._addKnownPrimeNumber(primeNumber);
    return isPrimeNumber;
  },

  _continueTestingPrimeNumber: function(squareRoot) {
    return this._startingNumber <= squareRoot;
  },

  _stopTestingKnownPrimes: function(knownPrimeNumber, squareRoot, primeNumber) {
    return knownPrimeNumber > squareRoot || knownPrimeNumber > primeNumber;
  },

  _isThePrimeNumberKnown: function(knownPrimeNumber, primeNumber) {
    return knownPrimeNumber == primeNumber;
  },

  _isTheNewNumberPrime: function() {
    if (this._useRecursionOnNewPrimeNumber()) {
      this._calculatePrimeNumber(this._startingNumber, false);
    }
  },

  _addKnownPrimeNumber: function(primeNumber) {
    this._knownPrimes.push(primeNumber);
    if (this._sortKnownPrimes()) {
      this._knownPrimes = this._knownPrimes.sort(function(a,b){return a-b});
    }
  },

  _isPrimeNumberDivisible: function(primeNumber, divisor) {
    return (divisor != 1 && primeNumber % divisor == 0);
  },

  _isPrimeNumberNotValid: function(primeNumber) {
    return ! this._isNumber(primeNumber) || primeNumber % 2 == 0;
  },

  _isPrimeNumberOneOrTwo: function(primeNumber) {
    return primeNumber == 1 || primeNumber == 2;
  },

  _incStartingNumber: function() {
    this._isTheNewNumberPrime();
    this._startingNumber += 2;
  },

  _isNumber: function(n) {
    /*
      http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric
      return !isNaN(parseFloat(n)) && isFinite(n) && n>0;
    */
    return !isNaN(parseInt(n,10)) && (parseFloat(n,10) == parseInt(n,10)) && isFinite(n) && n >= 0;
  },

  _setStartingNumber: function() {
    if (this._knownPrimes.length == 2) {
      this._startingNumber = 3;
    } else {
      this._startingNumber = this._knownPrimes[this._knownPrimes.length-1];
    }
  },

  _getSquareRoot: function(number) {
    return Math.floor(Math.sqrt(number));
  },

  _getLastKnownPrime: function() {
    return this._knownPrimes[this._knownPrimes.length - 1];
  },

  _getNMinus2KnownPrime: function() {
    return this._knownPrimes[this._knownPrimes.length - 2];
  },

  _sortKnownPrimes: function() {
    return this._getNMinus2KnownPrime() > this._getLastKnownPrime();
  },

  _useRecursionOnNewPrimeNumber: function() {
    return this._startingNumber != this._getLastKnownPrime();
  }
}

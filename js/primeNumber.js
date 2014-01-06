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

    if (this._isPrimeNumberEven(primeNumber)) {
      return false;
    } else {
      for (knownPrimeNumber in self._knownPrimes) {
        if (knownPrimeNumber == primeNumber) {
          return true;
        } 
        if (this._isPrimeNumberDivisible(primeNumber, knownPrimeNumber)) {
          return false;
        }
      }

      this._setStartingNumber();
      var squareRoot = this._getSquareRoot(primeNumber);
      while (this._startingNumber <= squareRoot) {
        if (this._isPrimeNumberDivisible(primeNumber, this._startingNumber)) {
          return false;
        }
        this._incStartingNumber(isPrimeNumberCheck);
      }
    }

    this._knownPrimes.push(primeNumber);
    return isPrimeNumber;
  },

  _isTheNewNumberPrime: function(isPrimeNumberCheck) {
    if (isPrimeNumberCheck) {
      if (this._calculatePrimeNumber(this._startingNumber, false)) {
        this._knownPrimes.push(this._startingNumber);// unless i == inputNumber
      }
    }
  },

  _isPrimeNumberDivisible: function(primeNumber, divisor) {
    return divisor != 1 && primeNumber % divisor == 0;
  },

  _isPrimeNumberEven: function(primeNumber) {
    return ! this._isNumber(primeNumber) || primeNumber % 2 == 0;
  },

  _isPrimeNumberOneOrTwo: function(primeNumber) {
    return primeNumber == 1 || primeNumber == 2;
  },

  _incStartingNumber: function(isPrimeNumberCheck) {
    //the startingNumber will always be odd after 2
    this._isTheNewNumberPrime(isPrimeNumberCheck);
    this._startingNumber += (this._startingNumber > 2 ? 2 : 1);
  },

  _isNumber: function(n) {
    /*
      http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric
      return !isNaN(parseFloat(n)) && isFinite(n) && n>0;
    */
    return !isNaN(parseInt(n,10)) && (parseFloat(n,10) == parseInt(n,10)) && isFinite(n) && n >= 0;
  },

  _setStartingNumber: function() {
    if (this._knownPrimes.length == 0) {
      this._startingNumber = 1;
    } else {
      var sortedKnownPrimes = this._knownPrimes.sort(function(a,b){return a-b});
      this._startingNumber = sortedKnownPrimes[sortedKnownPrimes.length-1];
    }
  },

  _getSquareRoot: function(number) {
    return Math.floor(Math.sqrt(number));
  }

}

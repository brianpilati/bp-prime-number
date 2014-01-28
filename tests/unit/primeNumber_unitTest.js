describe("PrimeNumber", function() {
  var primeNumberObject;

  beforeEach(function() {
    primeNumberObject = new PrimeNumber();
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime with input number that is not a number", function() {
    expect(primeNumberObject.isPrimeNumber('blah')).toEqual(false);
    expect(primeNumberObject.isPrimeNumber(' ')).toEqual(false);
    expect(primeNumberObject.isPrimeNumber('\t\r')).toEqual(false);
    expect(primeNumberObject.isPrimeNumber('\n\r')).toEqual(false);
    expect(primeNumberObject.isPrimeNumber(-1)).toEqual(false);
    expect(primeNumberObject.isPrimeNumber(7e5)).toEqual(false);
    expect(primeNumberObject.isPrimeNumber(0)).toEqual(false);
    expect(primeNumberObject.isPrimeNumber(1)).toEqual(true);
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime with input number as 0", function() {
    expect(primeNumberObject.isPrimeNumber(0)).toEqual(false);
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime with input number that is even", function() {
    expect(primeNumberObject.isPrimeNumber(4)).toEqual(false);
    expect(primeNumberObject.isPrimeNumber(16)).toEqual(false);
  });

  it("Is the starting number correct", function() {
    primeNumberObject._setStartingNumber();
    expect(primeNumberObject._startingNumber).toEqual(3);

    primeNumberObject._knownPrimes = [7];
    primeNumberObject._addKnownPrimeNumber(11);
    primeNumberObject._addKnownPrimeNumber(29);
    primeNumberObject._addKnownPrimeNumber(3);
    primeNumberObject._addKnownPrimeNumber(2);
    primeNumberObject._addKnownPrimeNumber(1);
    primeNumberObject._addKnownPrimeNumber(13);
    primeNumberObject._setStartingNumber();
    expect(primeNumberObject._startingNumber).toEqual(29);
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime", function() {
    expect(primeNumberObject.isPrimeNumber(2)).toBe(true);
    expect(primeNumberObject._knownPrimes).toEqual([1, 2]);

    expect(primeNumberObject.isPrimeNumber(5)).toBe(true);
    expect(primeNumberObject._knownPrimes).toEqual([1, 2, 5]);
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime", function() {
    expect(primeNumberObject.isPrimeNumber(1)).toEqual(true);
    expect(primeNumberObject._knownPrimes).toEqual([1, 2]);
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime", function() {
    expect(primeNumberObject.isPrimeNumber(2)).toEqual(true);
    expect(primeNumberObject._knownPrimes).toEqual([1, 2]);
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime", function() {
    expect(primeNumberObject.isPrimeNumber(3)).toEqual(true);
    expect(primeNumberObject._knownPrimes).toEqual([1, 2, 3]);
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime", function() {
    expect(primeNumberObject.isPrimeNumber(4)).toEqual(false);
    expect(primeNumberObject._knownPrimes).toEqual([1, 2]);
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime", function() {
    expect(primeNumberObject.isPrimeNumber(5)).toEqual(true);
    expect(primeNumberObject._knownPrimes).toEqual([1, 2, 5]);

    expect(primeNumberObject.isPrimeNumber(3)).toEqual(true);
    expect(primeNumberObject._knownPrimes).toEqual([1, 2, 3, 5]);
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime", function() {
    expect(primeNumberObject.isPrimeNumber(15)).toEqual(false);
    expect(primeNumberObject._knownPrimes).toEqual([1, 2]);
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime", function() {
    expect(primeNumberObject.isPrimeNumber(25)).toEqual(false);
    expect(primeNumberObject._knownPrimes).toEqual([1, 2, 3]);
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime", function() {
    expect(primeNumberObject.isPrimeNumber(125)).toEqual(false);
    expect(primeNumberObject._knownPrimes).toEqual([1, 2, 3]);
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime", function() {
    expect(primeNumberObject.isPrimeNumber(1.1)).toEqual(false);
    expect(primeNumberObject._knownPrimes).toEqual([1, 2]);
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime", function() {
    expect(primeNumberObject.isPrimeNumber(503)).toEqual(true);
    expect(primeNumberObject._knownPrimes).toEqual([ 1, 2, 3, 5, 7, 11, 13, 17, 19, 503 ]);
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime", function() {
    expect(primeNumberObject.isPrimeNumber(523)).toEqual(true);
    expect(primeNumberObject._knownPrimes).toEqual([ 1, 2, 3, 5, 7, 11, 13, 17, 19, 523 ]);

    expect(primeNumberObject.isPrimeNumber(421)).toEqual(true);
    expect(primeNumberObject._knownPrimes).toEqual([ 1, 2, 3, 5, 7, 11, 13, 17, 19, 421, 523 ]);

    expect(primeNumberObject.isPrimeNumber(29)).toEqual(true);
    expect(primeNumberObject._knownPrimes).toEqual([ 1, 2, 3, 5, 7, 11, 13, 17, 19, 29, 421, 523 ]);
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime", function() {
    expect(primeNumberObject.isPrimeNumber(911)).toEqual(true);
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime", function() {
    var startDate = new Date();
    for (var index=0; index<10001; index++) {
      primeNumberObject.isPrimeNumber(index);
    }

    var endDate = new Date();
    var stopWatch = endDate - startDate;
    expect(stopWatch).toBeLessThan(250);
    expect(primeNumberObject._knownPrimes.length).toBe(1230);
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime", function() {
    var startDate = new Date();
    var counter = 0;

    for(var index=0; index<5; index++) {
      var nextPrime = 1;
      var primeNumbers = []
      var stoppingNumber = Math.pow(10, index);
      while (primeNumbers.length <= stoppingNumber) {
        if (primeNumberObject.isPrimeNumber(nextPrime) ) {
          primeNumbers.push(nextPrime);
        }
        nextPrime += (nextPrime < 3 ? 1 : 2);
        counter++;
      }
    }
 
    var endDate = new Date();
    var stopWatch = endDate - startDate;
    expect(stopWatch).toBeLessThan(6000);
    expect(primeNumberObject._knownPrimes.length).toBe(10001);
  });
});

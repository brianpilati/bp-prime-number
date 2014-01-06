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
    primeNumberObject._knownPrimes = [];
    primeNumberObject._setStartingNumber();
    expect(primeNumberObject._startingNumber).toEqual(1);

    primeNumberObject._knownPrimes = [7,11,29,3,2,1,13];
    primeNumberObject._setStartingNumber(31);
    expect(primeNumberObject._startingNumber).toEqual(29);
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime", function() {
    expect(primeNumberObject.isPrimeNumber(3)).toBe(true);
    expect(primeNumberObject._knownPrimes).toEqual([1, 2, 3]);

    expect(primeNumberObject.isPrimeNumber(5)).toBe(true);
    expect(primeNumberObject._knownPrimes).toEqual([1, 2, 3, 5]);
  });

  it("The 'isPrimeNumber' method to calculate if a number is prime", function() {
    expect(primeNumberObject.isPrimeNumber(1)).toEqual(true);
    expect(primeNumberObject.isPrimeNumber(2)).toEqual(true);
    expect(primeNumberObject.isPrimeNumber(3)).toEqual(true);
    expect(primeNumberObject.isPrimeNumber(4)).toEqual(false);
    expect(primeNumberObject.isPrimeNumber(5)).toEqual(true);
    expect(primeNumberObject.isPrimeNumber(25)).toEqual(false);
    expect(primeNumberObject.isPrimeNumber(125)).toEqual(false);
    expect(primeNumberObject.isPrimeNumber(1.1)).toEqual(false);
  });

});

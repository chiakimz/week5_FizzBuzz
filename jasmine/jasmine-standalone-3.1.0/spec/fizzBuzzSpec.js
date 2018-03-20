
describe('FizzBuzz', function() {
  var fizzBuzz;
  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of three', function() {
    it('returns "Fizz" when entered three', function() {
      expect(fizzBuzz.says(3)).toEqual("Fizz");
    });
    it('returns "Fizz" when entered six', function() {
      expect(fizzBuzz.says(6)).toEqual("Fizz");
    });
  });

  describe('multiples of five', function() {
    it('returns "Buzz" when entered five', function() {
      expect(fizzBuzz.says(5)).toEqual("Buzz");
    });
    it('returns "Buzz" when entered ten', function() {
      expect(fizzBuzz.says(10)).toEqual("Buzz");
    });
  });

  describe('multiples of fifteen', function() {
    it('returns "FizzBuzz" when entered fifteen', function() {
      expect(fizzBuzz.says(15)).toEqual("FizzBuzz");
    });
    it('returns "FizzBuzz" when entered thirty', function() {
      expect(fizzBuzz.says(30)).toEqual("FizzBuzz");
    });
  });

  describe('other numbers', function() {
    it('returns the number when you enter number', function() {
      expect(fizzBuzz.says(7)).toEqual(7);
    });
    it('returns the number when you enter number', function() {
      expect(fizzBuzz.says(4)).toEqual(4);
    });
  })


});

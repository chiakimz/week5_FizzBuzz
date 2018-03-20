
function FizzBuzz(){}

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0
}

FizzBuzz.prototype.says = function(number) {
  if(this._isDivisibleBy(15, number)){
    return 'FizzBuzz'
  } else if (this._isDivisibleBy(3, number)){
    return 'Fizz'
  } else if (this._isDivisibleBy(5, number)){
    return 'Buzz'
  } else {
    return number
  }
};

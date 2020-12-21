const calculator = {
  plus: function(a, b){
    return a + b;
  },
  minus: function(a, b){
    return a - b;
  },
  multiple: function(a, b){
    return a * b;
  },
  division: function(a, b){
    return a / b;
  },
  power: function(a, b){
    return a ** b;
  }
}

const multiple1 = calculator.multiple(5, 5)
const multiple2 = calculator.multiple(5, multiple1)

const multiple(N) = calculater.multiple(5, multiple(N-1))

console.log(multiple(3))
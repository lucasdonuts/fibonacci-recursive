function fibonacci(n, values = []) {
  if(n < 2){
    return n;
  }

  values.push(fibonacci(n - 1, values) + fibonacci(n - 2, values))
  return values[values.length - 1]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 13");
  console.log("=>", fibonacci(7));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

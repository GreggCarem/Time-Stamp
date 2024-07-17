function factorialize(num) {
  let initial = 1;
  for (let index = 1; index <= num; index++) {
    initial *= index;
  }

  return initial;
}

console.log(factorialize(5));

//5! = 1 * 2 * 3 * 4 * 5 = 120

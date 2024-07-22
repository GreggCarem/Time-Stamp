function repeatStringNumTimes(str, num) {
  let result = "";

  for (let index = 0; index < num; index++) {
    result += str;
  }

  return result;
}

console.log(repeatStringNumTimes("abc", 3));

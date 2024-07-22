function confirmEnding(str, target) {
  let length = target.length;
  let ending = str.slice(-length);

  return ending === target;
}

console.log(confirmEnding("Horoscope", "scope"));

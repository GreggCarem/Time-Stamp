function findLongestWordLength(str) {
  let words = str.split(" ");

  let longestLength = "";

  for (let index = 0; index < words.length; index++) {
    if (words[index].length > longestLength) {
      longestLength = words[index].length;
    }
  }

  return longestLength;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

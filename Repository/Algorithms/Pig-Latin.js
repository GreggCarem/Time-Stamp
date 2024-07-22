function translatePigLatin(str) {
  const vowels = /^[aeiou]/i;

  if (vowels.test(str)) {
    return str + "way";
  }

  const firstVowelIndex = str.search(/[aeiou]/i);
  if (firstVowelIndex === -1) {
    return str + "ay";
  }

  return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + "ay";
}

console.log(translatePigLatin("consonant"));

//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  str = str.replace(/[_\s]+/g, "-");

  str = str.replace(/([a-z])([A-Z])/g).toLowerCase();
  return str;
}
console.log(spinalCase("This Is Spinal Tap"));

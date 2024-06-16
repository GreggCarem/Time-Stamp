const cards = ["diamond", "spade", "heart", "club"];
let currentCard;
let index;

while (currentCard !== "spade") {
  index = [Math.floor(Math.random() * 4)];

  currentCard = cards[index];
  console.log(`Index: ${index}, Card: ${currentCard}`);
}

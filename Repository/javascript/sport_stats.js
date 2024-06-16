const team = {
  _players: [
    { firstName: "Andres", lastName: "Solid", age: 21 },
    { firstName: "Juan", lastName: "Weak", age: 27 },
    { firstName: "Alberto", lastName: "Gonzaales", age: 76 },
  ],
  _games: [
    { opponent: "Lakers", teamPoints: 30, opponentPoints: 20 },
    { opponent: "Yankees", teamPoints: 45, opponentPoints: 76 },
    { opponent: "The Heat", teamPoints: 76, opponentPoints: 93 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};
team.addGame("Titans", 100, 98);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.games);

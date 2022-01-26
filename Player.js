class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {

    const playerCards = gameState.players[in_action].hole_cards

    const rankA = playerCards.filter((card) => card.rank === "A")
    const rankK = playerCards.filter((card) => card.rank === "K")
    const rankQ = playerCards.filter((card) => card.rank === "Q")
    const rankJ = playerCards.filter((card) => card.rank === "J")
    const rank10 = playerCards.filter((card) => card.rank === "10")
    const rank9 = playerCards.filter((card) => card.rank === "9")
    const rank8 = playerCards.filter((card) => card.rank === "8")
    const rank7 = playerCards.filter((card) => card.rank === "7")
    const rank6 = playerCards.filter((card) => card.rank === "6")
    const rank5 = playerCards.filter((card) => card.rank === "5")
    const rank4 = playerCards.filter((card) => card.rank === "4")
    const rank3 = playerCards.filter((card) => card.rank === "3")
    const rank2 = playerCards.filter((card) => card.rank === "2")

    if (rankA.length) {
      bet(10000)
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

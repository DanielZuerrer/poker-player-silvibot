class ScoreCalculator {
  static calculate_score(gameState) {
    const communityCards = gameState.community_cards;
    const playerCards = gameState.players[gameState.in_action].hole_cards;

    const fullHand = [...communityCards, ...playerCards];

    const ranks = fullHand.map((card) => card.rank);

    const scores = ranks.map((rank) => {
      switch (rank) {
        case "A":
          return 14;
        case "K":
          return 13;

        case "Q":
            return 12;

        case "J":
            return 11;

        default:
            return parseInt(rank);
      }
    });

    return scores.reduce((acc, e) => acc + e, 0)

    const rankA = playerCards.filter((card) => card.rank === "A");
    const rankK = playerCards.filter((card) => card.rank === "K");
    const rankQ = playerCards.filter((card) => card.rank === "Q");
    const rankJ = playerCards.filter((card) => card.rank === "J");
    const rank10 = playerCards.filter((card) => card.rank === "10");
    const rank9 = playerCards.filter((card) => card.rank === "9");
    const rank8 = playerCards.filter((card) => card.rank === "8");
    const rank7 = playerCards.filter((card) => card.rank === "7");
    const rank6 = playerCards.filter((card) => card.rank === "6");
    const rank5 = playerCards.filter((card) => card.rank === "5");
    const rank4 = playerCards.filter((card) => card.rank === "4");
    const rank3 = playerCards.filter((card) => card.rank === "3");
    const rank2 = playerCards.filter((card) => card.rank === "2");

}

module.exports = ScoreCalculator

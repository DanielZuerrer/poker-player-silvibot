const exctract_scores = (gameState) => {
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

  return scores;
};

const has_pair = (gameState) => {
    const scores = exctract_scores(gameState);

    const counts = {};
    scores.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

    let hasPair = false;
    let pairScore = null;
    
    Object.entries(counts).forEach(count => {
        if (count[1] === 2) {
            hasPair = true;
            pairScore = parseInt(count[0]);
        }

        return [hasPair, pairScore];
    });
}

const has_three_of_a_kind = (gameState) => {
    const scores = exctract_scores(gameState);

    const counts = {};
    scores.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

    let hasThreeOfAKind = false;
    let threeOfAKindScore = null;
    
    Object.entries(counts).forEach(count => {
        if (count[1] === 3) {
            hasThreeOfAKind = true;
            threeOfAKindScore = parseInt(count[0]);
        }

        return [hasThreeOfAKind, threeOfAKindScore];
    });
}

const calculate_score = (gameState) => {
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

  return scores.reduce((acc, e) => acc + e, 0);
};

module.exports = has_pair;
module.exports = has_three_of_a_kind;
module.exports = calculate_score;

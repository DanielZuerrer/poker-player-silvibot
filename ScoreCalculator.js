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

const get_counts = (scores) => {
  const counts = {};
  scores.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  return counts
}

const has_pair = (gameState) => {
    const scores = exctract_scores(gameState);

    const counts = get_counts(scores)

    let hasPair = false;
    let pairScore = null;
    
    Object.keys(counts).forEach(score => {
        if (counts[score] === 2) {
            hasPair = true;
            pairScore = parseInt(score);
        }

    });
    return [hasPair, pairScore];
}

const has_three_of_a_kind = (gameState) => {
    const scores = exctract_scores(gameState);

    const counts = get_counts(scores)

    let hasThreeOfAKind = false;
    let threeOfAKindScore = null;
    
    Object.keys(counts).forEach(score => {
        if (counts[score] === 3) {
            hasThreeOfAKind = true;
            threeOfAKindScore = parseInt(score);
        }

    });
    return [hasThreeOfAKind, threeOfAKindScore];
}

// const has_straight = (gameState) => {
//     const scores = exctract_scores(gameState);

//     const counts = get_counts(scores);

//     return counts ===
// }

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

exports.has_pair = has_pair
exports.has_three_of_a_kind = has_three_of_a_kind
exports.exctract_scores = exctract_scores;
exports.calculate_score = calculate_score;

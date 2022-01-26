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

const has_four_of_a_kind = (gameState) => {
  const scores = exctract_scores(gameState);

  const counts = get_counts(scores)

  let hasFourOfAKind = false;
  let fourOfAKindScore = null;
  
  Object.keys(counts).forEach(score => {
      if (counts[score] === 4) {
        hasFourOfAKind = true;
        fourOfAKindScore = parseInt(score);
      }

  });
  return [hasFourOfAKind, fourOfAKindScore];
}

const has_straight = (gameState) => {
    const scores = exctract_scores(gameState);

    const straights = [
      [2,3,4,5,6],[3,4,5,6,7],[4,5,6,7,8],[5,6,7,8,9],[6,7,8,9,10],[7,8,9,10,11],[8,9,10,11,12],[9,10,11,12,13],[10,11,12,13,14]
    ]

    let hasStraight = false;
    straights.forEach(straight => {
      if (straight.every(c => scores.includes(c))){
        hasStraight = true;
      }
    });
    return hasStraight;
}

const has_full_house = (gameState) => {
  const scores = exctract_scores(gameState);

  return has_pair(gameState)[0] && has_three_of_a_kind(gameState)[0];
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

exports.has_pair = has_pair;
exports.has_three_of_a_kind = has_three_of_a_kind;
exports.has_four_of_a_kind = has_four_of_a_kind;
exports.has_straight = has_straight;
exports.has_full_house = has_full_house;
exports.exctract_scores = exctract_scores;
exports.calculate_score = calculate_score;

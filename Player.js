const { fold, check, raise, allIn } = require('./bet.js');
const { has_pair, has_three_of_a_kind, has_straight } = require('./ScoreCalculator.js');

class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {

    console.log(gameState)

    const player = gameState.players[gameState.in_action]

    const communityCards = gameState.community_cards
    const playerCards = gameState.players[gameState.in_action].hole_cards

    const communityCardValues = communityCards.map(card => card.rank)
    const playerCardValues = playerCards.map(card => card.rank)

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


    // Before seeing community cards
    if (gameState.round === 0) {
      
    }

    // All in if straight
    if(has_straight(gameState)) {
      allIn(bet)
      return
    }

    // All in if 3 of a kind
    if(has_three_of_a_kind(gameState)[0]) {
      allIn(bet)
      return
    }

     // All in if one pair
     if (has_pair(gameState)[0]) {
      allIn(bet)
      return
    }

    // if(gameState.round === 0 && gameState.current_buy_in > 50) {
    //   fold(bet);
    //   return
    // }

    // // All in if one high card
    // if (rankA || rankK) {
    //   check(gameState, bet);
    //   return
    // }

    if(gameState.current_buy_in > 35) {
      fold(bet)  
    }

    check(gameState, bet);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

const { fold, check, raise, allIn } = require('./bet.js');
const { is_highest_card, has_uniqe_pair, has_three_of_a_kind, has_four_of_a_kind, has_straight, has_full_house , has_flush, community_has_almost_flush, mapCardValues} = require('./ScoreCalculator.js');

class Player {
  static get VERSION() {
    return '2.4';
  }

  static betRequest(gameState, bet) {

    const playerCards = gameState.players[gameState.in_action].hole_cards;
    const playerRanks = playerCards.map((card) => card.rank);
    const playerValues = playerRanks.map(mapCardValues);

    if(Math.max(...playerValues) > 11) {
      check(gameState, bet)
      return
    }

    console.log(gameState)

    // All in if full house
    if(has_full_house(gameState)) {
      console.log("found full house")
      allIn(bet)
      return
    }

    // All in if straight
    if(has_straight(gameState)) {
      console.log("found straight")
      raise(gameState, bet)
      return
    }

    // All in if 3 of a kind
    if(has_three_of_a_kind(gameState)[0]) {
      console.log("found 3 of a kind")
      raise(gameState, bet)
      return
    }

    // All in if 4 of a kind
    if(has_four_of_a_kind(gameState)[0]) {
      console.log("found 4 of a kind")
      allIn(bet)
      return
    }

    if(has_flush(gameState)[0] && !community_has_almost_flush(gameState)) {
      console.log("found flush")
      raise(gameState, bet)
      return
    }

     // Raise if one pair
     if (has_uniqe_pair(gameState)[0] && gameState.round <= 3) {
      console.log("found pair")

      if(gameState.round <= 1 && has_uniqe_pair(gameState)[1] <= 13) {
        fold(bet)  
      }

      // Check if not highest pair
      if(!is_highest_card(gameState) && gameState.current_buy_in > 50) {
        fold(bet)       
      }

      // Check if low pair or stack too high
      if(has_uniqe_pair(gameState)[1] < 10 || gameState.current_buy_in > gameState.players[gameState.in_action].stack/3) { 
        check(gameState, bet)
        return
      }
      // Raise high pair
      raise(gameState, bet)
      return
    }

    if(gameState.current_buy_in > 8) {
      fold(bet)  
    }

    check(gameState, bet)
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

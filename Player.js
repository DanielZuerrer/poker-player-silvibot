const { fold, check, raise, allIn } = require('./bet.js');
const { has_pair,has_uniqe_pair, has_three_of_a_kind, has_four_of_a_kind, has_straight, has_full_house } = require('./ScoreCalculator.js');

class Player {
  static get VERSION() {
    return '2.4';
  }

  static betRequest(gameState, bet) {

    console.log(gameState)

    // Random bluff
    // if (Math.random() < 0.2) { // 20% probability of getting true
    //   console.log("random bluff")
    //   allIn(bet)
    //   return
    // }

    // All in if full house
    if(has_full_house(gameState)) {
      console.log("found full house")
      allIn(bet)
      return
    }

    // All in if straight
    if(has_straight(gameState)) {
      console.log("found straight")
      allIn(bet)
      return
    }

    // All in if 3 of a kind
    if(has_three_of_a_kind(gameState)[0]) {
      console.log("found 3 of a kind")
      allIn(bet)
      return
    }

    // All in if 4 of a kind
    if(has_four_of_a_kind(gameState)[0]) {
      console.log("found 4 of a kind")
      allIn(bet)
      return
    }

     // Raise if one pair
     if (has_uniqe_pair(gameState)[0]) {
      console.log("found pair")
      // Check if low pair or stack too high
      if(has_uniqe_pair(gameState)[1] < 10 || gameState.current_buy_in > gameState.players[gameState.in_action].stack/3) { 
        check(gameState, bet)
        return
      }
      // Raise high pair
      raise(gameState, bet)
      return
    }

    if(gameState.current_buy_in > 35) {
      fold(bet)  
    }

    check(gameState, bet)
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

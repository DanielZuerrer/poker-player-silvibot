const fold = (bet) => bet(0)

const check = (gameState, bet) => {
  bet(gameState.current_buy_in - gameState.players[gameState.in_action].bet)
}

const raise = (gameState, bet) => {
  bet(gameState.current_buy_in - gameState.players[gameState.in_action].bet + gameState.minimum_raise) 
}

const allIn = (bet) => {
  bet(10000) 
}

exports.fold = fold;
exports.check = check;
exports.raise = raise;
exports.allIn = allIn;

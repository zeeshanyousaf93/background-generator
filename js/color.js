// This function returns a random Number between/including 0 and `options-1`
function getRandomColorChannel(options=256) {
  return Math.floor( Math.random() * options )
}

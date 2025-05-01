function updateScore(current, isMatch) {
    return isMatch ? current + 5 : current - 1;
  }
  
  module.exports = { updateScore };
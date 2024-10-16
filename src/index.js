module.exports = function check(str, bracketsConfig) {
  let stack = [];

  let openBr = bracketsConfig.map(arrOfPair => arrOfPair[0]); 
  let closeBr = bracketsConfig.map(arrOfPair => arrOfPair[1]);

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (openBr.includes(char)) {
      if (closeBr.includes(char) && stack[stack.length - 1] === char) {
        stack.pop(char);
      } else {
        stack.push(char);
      }
    } else { 
      let pairOpenBr = openBr[closeBr.indexOf(char)];
      if (stack.length === 0 || pairOpenBr !== stack.pop()) return false;
    }
  }

  return stack.length === 0;
}

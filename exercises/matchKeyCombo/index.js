/*
A computer game allows players to perform special actions using key combinations "QEE" or "ZCC".
A player gets extra points if they use this combinations equally in a gaming session
Skilled players who don't use any of the special actions also get extra points
Complete the matchKeyCombo function below which returns true if number of occurrence of "QEE" and "ZCC" are equal in the given sequence.
Otherwise, return false

String comparison is case sensitive
*/

function matchKeyCombo(sequence) {
  const qeeCount = (sequence.match(/QEE/g) || []).length; // using empty array when no matches found to avoid null check
  const zccCount = (sequence.match(/ZCC/g) || []).length;

  return qeeCount === zccCount;
}

console.log(matchKeyCombo('A'));

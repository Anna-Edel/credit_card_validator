export function creditCardValidator(number) {
    let sum = 0;
    const numArray = number.toString().toString().split('').reverse();
    let checksum = numArray[0];
    for (let i = 1; i <= Object.keys(numArray).length-1; i++) {
      if (i % 2 === 0) {
        sum += parseInt(numArray[i]);
      } else {
        let doubled = parseInt(numArray[i]) * 2;
        if (doubled > 9) {
          sum += doubled - 9;
        } else {
          sum += doubled;
        }
      }
    }
    return 10 - (sum % 10) == checksum;
  }
  
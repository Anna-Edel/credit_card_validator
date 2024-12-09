export function numberCardMajorBrands (number) {
    let numArray = number.toString().split('');
    let firstTwo = numArray[0] + numArray[1];
    if (firstTwo === '34' || firstTwo === '37') {
      return 'American Express';
    }
    if (firstTwo === '51' || firstTwo === '52' || firstTwo === '53' || firstTwo === '54' || firstTwo === '55') {
      return 'MasterCard';
    }
    if (firstTwo === '4') {
      return 'Visa';
    }
    if (firstTwo === '60' || firstTwo === '64' || firstTwo === '65') {
      return 'Discover';
    }
    if (firstTwo === '50' || firstTwo === '58' || firstTwo === '63'|| firstTwo === '67') {
      return 'Maestro';
    }
    if (firstTwo === '22') {
      return 'Mir';
    }
  }
  
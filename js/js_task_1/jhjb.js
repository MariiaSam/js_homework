function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Change code below this line
  let totalPrice = pricePerDroid * orderedQuantity;
    if (totalPrice  > customerCredits){
      message = `Insufficient funds!`;
    } else {
      message = `You ordered &{orderedQuantity} droids, you have &{customerCredits - totalPrice} credits left`;
    }
    // Change code above this line
    return message;
  }
  makeTransaction(3000, 5, 23000);
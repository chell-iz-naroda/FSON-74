
const calculateTotalPrice = (orderedItems) => {
    let totalPrice = 0;
    orderedItems.forEach ((item) => {
      totalPrice += item;
      console.log (totalPrice);
    });
    console.log (totalPrice);
  };

  calculateTotalPrice([12, 85, 37, 4]);
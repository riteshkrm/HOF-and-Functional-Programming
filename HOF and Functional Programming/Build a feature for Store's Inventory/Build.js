const storeInventory = {
  item1: 10, // Price in USD
  item2: 25,
  item3: 15,
  item4: 30,
};

const exchangeRate = 80;

const convertedInventory = {};

Object.keys(storeInventory).map((item) => {
  const priceInRupees = storeInventory[item] * exchangeRate;
  convertedInventory[item] = priceInRupees;
});

console.log(convertedInventory);

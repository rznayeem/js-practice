function vegQuantity(potatoQuantity, onionQuantity, riceQuantity) {
  const potatoPrice = 50;
  const onionPrice = 130;
  const ricePrice = 70;
  const totalPotatoCost = potatoQuantity * potatoPrice;
  const totalOnionCost = onionQuantity * onionPrice;
  const totalRiceCost = riceQuantity * ricePrice;
  const totalCost = totalPotatoCost + totalOnionCost + totalRiceCost;
  return totalCost;
}
const quantity = vegQuantity(5, 2, 15);
console.log(quantity, 'taka');

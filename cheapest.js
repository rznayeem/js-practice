const phones = [
  { name: 'samsung', price: 130000, camera: '200MP' },
  { name: 'xiaomi', pice: 45000, camera: '100MP' },
  { name: 'vivo', price: 65000, camera: '100MP' },
  { name: 'Iphone', price: 160000, camera: '45MP' },
];
function costlyPhone(phones) {
  let max = phones[0];
  for (const phone of phones) {
    if (phone.price > max.price) {
      max = phone;
    }
  }
  return max;
}
console.log('most expensive phone is: ', costlyPhone(phones));

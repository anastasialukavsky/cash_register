//LVL 1
function removeItem(name, drawer) {
  for (let item of drawer) {
    if (item.name === name) item.quantity--;
  }
  return drawer;
}

const drawer = [{ name: 'penny', value: 1, quantity: 5 }];
const returnedDrawer = removeItem('penny', drawer); // Removes 1 penny
console.log(returnedDrawer); // [{ name: 'penny', value: 1, quantity: 4 }]


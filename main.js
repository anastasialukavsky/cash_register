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

function addItem(name, drawer) {
  // Write your code here
  for (let item of drawer) {
    if (item.name === name) {
      item.quantity++;
    }
  }
  return drawer;
}

const drawerToAdd = [{ name: 'nickel', value: 5, quantity: 5 }];
const updatedDrawer = addItem('nickel', drawerToAdd); // Adds 1 nickel
console.log(updatedDrawer); // [{ name: 'nickel', value: 5, quantity: 6 }];
//LVL2

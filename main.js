//*LVL 1
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
console.log({ updatedDrawer }); // [{ name: 'nickel', value: 5, quantity: 6 }];

//*LVL2

const drawerLvl2 = [
  { name: 'penny', value: 1, quantity: 72 },
  { name: 'nickel', value: 5, quantity: 41 },
  { name: 'dime', value: 10, quantity: 31 },
  { name: 'quarter', value: 25, quantity: 17 },
  { name: 'one', value: 100, quantity: 90 },
  { name: 'five', value: 500, quantity: 11 },
  { name: 'ten', value: 1_000, quantity: 2 },
  { name: 'twenty', value: 2_000, quantity: 3 },
  { name: 'hundred', value: 10_000, quantity: 1 },
];

function countCoins(drawer) {
  let count = 0;
  for (let item of drawer) {
    if (item.value < 100) count += item.quantity;
  }
  return count;
}
function countNotes(drawer) {
  let count = 0;
  for (let item of drawer) {
    if (item.value >= 100) count += item.quantity;
  }
  return count;
  x;
}

const coins = countCoins(drawerLvl2); // Returns 161
const notes = countNotes(drawerLvl2); // Returns 107
console.log({ coins });
console.log({ notes });

//*LVL3
const drawerSum = [
  { name: 'penny', value: 1, quantity: 72 },
  { name: 'nickel', value: 5, quantity: 41 },
  { name: 'dime', value: 10, quantity: 31 },
  { name: 'quarter', value: 25, quantity: 17 },
  { name: 'one', value: 100, quantity: 90 },
  { name: 'five', value: 500, quantity: 11 },
  { name: 'ten', value: 1_000, quantity: 2 },
  { name: 'twenty', value: 2_000, quantity: 3 },
  { name: 'hundred', value: 10_000, quantity: 1 },
];
function sumDrawer(drawer) {
  let sum = 0;
  for (let item of drawer) {
    let totalValue = (item.quantity * item.value) / 100;
    sum += totalValue;
  }
  let result = sum.toFixed(2);
  return `\$${result}`;
}

const total = sumDrawer(drawerSum); // Returns '$335.12'
console.log({ total });

//*LVL 4

const drawerAmount = [
  { name: 'penny', value: 1, quantity: 2 },
  { name: 'nickel', value: 5, quantity: 0 },
  { name: 'dime', value: 10, quantity: 0 },
  { name: 'quarter', value: 25, quantity: 3 },
  { name: 'one', value: 100, quantity: 2 },
  { name: 'five', value: 500, quantity: 1 },
  { name: 'ten', value: 1000, quantity: 1 },
];

function canMakeAmount(target, drawer) {
  let drawerCopy = [...drawer].reverse();

  function checkAmountRecursively(target, drawerIdx) {
    if (target === 0) return true;
    if (target < 0 || drawerIdx === drawerCopy.length) return false;

    let currentRow = drawerCopy[drawerIdx];

    for (let i = 0; i <= currentRow.quantity; i++) {
      let amountToSubtract = i * currentRow.value;

      if (
        amountToSubtract <= target &&
        checkAmountRecursively(target - amountToSubtract, drawerIdx + 1)
      )
        return true;
    }

    return false;
  }

  return checkAmountRecursively(target, 0);
}

const testAmount1 = canMakeAmount(613, drawerAmount); // Returns false
const testAmount2 = canMakeAmount(1651, drawerAmount); // Returns true

console.log({ testAmount1 });
console.log({ testAmount2 });



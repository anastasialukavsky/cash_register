const drawer = [
  { name: 'penny', value: 1, quantity: 2 }, //2
  { name: 'nickel', value: 5, quantity: 0 }, //0
  { name: 'dime', value: 10, quantity: 0 }, //0
  { name: 'quarter', value: 25, quantity: 3 },  //75
  { name: 'one', value: 100, quantity: 2 }, //200
  { name: 'five', value: 500, quantity: 1 },//500
  { name: 'ten', value: 1000, quantity: 1 },//1000
];

/**
 * 
Level 1:
removeItem(name, drawer): Removes a single item from the drawer
addItem(name, drawer): Adds a single item to the drawer
Level 2:
countCoins(drawer): Counts how many coins are in the drawer
countNotes(drawer): Counts how many notes/bills are in the drawer
Level 3:
sumDrawer(drawer): Calculates the total amount of money in the drawer as a string formatted in dollars (see example below)
Level 4:
canMakeAmount(target, drawer): Determines whether it is possible to create a specific cash amount from the items in the drawer.
Level 5:
transaction(cost, paid, drawer): Calculates the change required from a transaction and removes it from the drawer if possible.
 */

function addItem(name, drawer) {
  for (let item of drawer) {
    if (item.name === name) item.quantity++;
  }
}

function removeItem(name, drawer) {
  for (let item of drawer) {
    if (item.name === name) item.quantity--;
  }
}

function sumDrawer(drawer) {
  let sum = 0;

  for (let item of drawer) {
    let totalValue = (item.quantity * item.value) / 100;
    sum += totalValue;
  }

  let result = sum.toFixed(2);

  return `\$${result}`;
}

function canMakeAmount(target, drawer) {
  let sumOfDrawer = sumDrawer(drawer);
  if (sumOfDrawer < target) return false;
  let targetValue = String(target * 100);

  // for (let  i = 0; i < drawer.length; i++) {
  //   let rowValue = drawer[i].value * drawer[i].quantity

  //   if(targetValue.length === 6)

  // }
for (let i = targetValue.length -1; i >= 0; i --) {

  let currentValue = targetValue[i];
  for (let j = 0; j < drawer.length; j++) {

  }
}

}

//sort drawer in descending order 

    //create a function to check if we can make amount recursively
      //checkTargetRec(target, drawerIdx)
        //base case - if target === 0 retunr true
        //if (target ) < 0 return false



        // let current row = drawer[drawerIdx]

        //for loop over currentRow.qty
          //subtract = i *currentRow.value

          //if(checkTargetRec(target - subtract, drawerIdx + 1)) return true


          //return call rec func outside of for loop(target, idx+1)

const drawer1 = [{ name: 'penny', value: 1, quantity: 5 }];
const returnedDrawer = removeItem('penny', drawer1); // Removes 1 penny
console.log(returnedDrawer); // [{ name: 'penny', value: 1, quantity: 4 }]

const drawerToAdd = [{ name: 'nickel', value: 5, quantity: 5 }];
const updatedDrawer = addItem('nickel', drawerToAdd); // Adds 1 nickel
console.log(updatedDrawer); // [{ name: 'nickel', value: 5, quantity: 6 }];

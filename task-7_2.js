
// # Завдання 2
// Виправ помилки, які будуть в консолі, 
// щоб скрипт запрацював.


const inventory = {
  items: ["Knife", "Gas mask"],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
    
    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter((item) => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

// invokeInventoryAction("Medkit", inventory.add);
// invokeInventoryAction("Medkit", inventory.add.bind(inventory));
inventory.add("Medkit");
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction("Gas mask", inventory.remove);
// invokeInventoryAction("Gas mask", inventory.remove.bind(inventory));
inventory.remove("Gas mask")
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']

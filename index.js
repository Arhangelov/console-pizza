var menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaian", price: 10 },
    { name: "Veggei", price: 9 },
];
var cashInRegister = 100;
var orderQueue = [];
var nextOrderId = 1;
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
;
function placeOrder(pizzaName) {
    var currOrderedItem = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!currOrderedItem) {
        console.log("".concat(pizzaName, " does not exist in the menu"));
        return;
    }
    cashInRegister += currOrderedItem.price;
    var newOrder = {
        id: nextOrderId++,
        pizza: currOrderedItem,
        status: "ordered"
    };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.log("Order with ID ".concat(orderId, " not found."));
        return undefined;
    }
    order.status = "completed";
    return order;
}
addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 });
addNewPizza({ name: "BBQ Chicken", cost: 12 });
addNewPizza({ name: "Spicy Sausage", cost: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);

function processPayment (amount) {
    console.log('Collecting payment of ' + amount);
}
function proccessOrder (orderId, amount) {
    console.log(orderId + ' is being processed');
    processPayment(amount);
    console.log(orderId + ' has been fully processed');
}
console.log('Processing orders');
proccessOrder(12321, 10.99);
proccessOrder(12322, 12.99);
proccessOrder(12323, 15.0);
console.log('All the orders have been processed');

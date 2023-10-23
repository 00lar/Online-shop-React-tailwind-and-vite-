/**  
*This funcintion calculates the total price of a new order
* @param {Array} products cardproduct: array of objects
* @returns {Number} sum of all products prices
*/
export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.price)
    return sum;
}
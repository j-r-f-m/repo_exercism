// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.
/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
 export function timeToMixJuice(name) {
    switch (name) {
        case 'Pure Strawberry Joy':
            console.log('Pure Strawberry Joy')
            return 0.5;
        case 'Energizer':
            return 1.5;
        case 'Green Garden':
            return 1.5;
        case 'Tropical Island':
            return 3;
        case 'All or Nothing':
            return 5;
        default:
            return 2.5;
    };
}
/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
    let current_wedges = 0;
    let current_limes = 0;
    for (let i = 0; i < limes.length; i++) {
        if (current_wedges >= wedgesNeeded) {
            console.log(current_limes);
            return current_limes;
        } else if (limes[i] === 'small') {
            current_wedges += 6;
            current_limes += 1;
        } else if (limes[i] === 'medium') {
            current_wedges += 8;
            current_limes += 1;
        } else if (limes[i] === 'large') {
            current_wedges += 10;
            current_limes += 1;
        } 
    }
  console.log(current_limes);
  return current_limes;
}
/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
    // counts time that is used on each order
    let time_used = 0;
    let removed_element = '';
    let type_removed_ele = '';
    // clone input array so we can remove the completed orders from the cloned 
    // array and return that array
    let clone_orders = Array.from(orders);
    for (let i = 0; i < orders.length; i++) {
        console.log(`time_used ${time_used}`)
        console.log(`timeLeft ${timeLeft}`)
        if (time_used >= timeLeft) {
            console.log(clone_orders.length)
            return clone_orders;
        }
        time_used += timeToMixJuice(orders[i]);
        removed_element = clone_orders.shift();
        console.log(clone_orders.length)
        if (!clone_orders.length) {
              console.log('lol')
              return [];
          }
    }
  }

import {
  getFacilities,
  getTransientState,
  getMinerals,
  getFacilityMinerals,
  getOrders,
  getColonies,
  getGovernors
} from "./database.js";

const minerals = getMinerals();

const facilities = getFacilities();
const colonies = getColonies()


/*export const displayOrder = () => {
  const orders = getOrders();
  let orderFacility = null;
  let orderMineral = null;
  let html = `<ul>`;
  // let quantityPerMineral = 0;
  for (let order of orders) {
    if (order.selectedMineral && order.selectedFacility) {
      for (const mineral of minerals) {
        if (order.selectedMineral === mineral.id) {
          orderMineral = mineral;
          
        }
      }
      for (const facility of facilities) {
        if (order.selectedFacility === facility.id) {
          orderFacility = facility;
        }
      }
      // quantityPerMineral ++
      html += `<li>
        1 ton of ${orderMineral.name} from ${orderFacility.name}
        </li>`;
    }
  }
  html += `</ul>`;
  return html;
};*/


export const displayCart = () => {
  const transientState = getTransientState();
  let cartFacility = null;
  let cartMineral = null;
  let html = "";

  if (transientState.selectedMineral && transientState.selectedFacility) {
    for (const mineral of minerals) {
      if (transientState.selectedMineral === mineral.id) {
        cartMineral = mineral;
      }
    }
    for (const facility of facilities) {
      if (transientState.selectedFacility === facility.id) {
        cartFacility = facility;
      }
    }
    html += `<h4>
      1 ton of ${cartMineral.name} from ${cartFacility.name}
      </h4>`;
  }
  return html;
}

// const quantityFilter = (pastOrder) => {
//   for (const mineral of minerals) {
//     return pastOrder.mineralId === mineral.id;
//   }
// }


/*export const displayOrder = () => {
  const orders = getOrders();
  let pastOrders = [];
  let newOrder = {};
  let html = `<ul>`;
  // let quantityPerMineral = pastOrders.filter(quantityFilter);
  for (let order of orders) {
    for (const mineral of minerals) {
      if (order.selectedMineral === mineral.id) {
        newOrder.name = mineral.name;
        newOrder.mineralId = mineral.id;
        newOrder.colonyId = order.colonyId;
        pastOrders.push(newOrder)
        newOrder = {}
      }
    }
    html += `<li>
    ${pastOrders.length} ton of ${newOrder.name}
      </li>`;
  }
  html += `</ul>`;
  return html;
};

*/

export const displayOrder = () => {
  const transientState = getTransientState()
  const orders = getOrders()
  const governors = getGovernors()
  let ironCount = 0;
  let saltCount = 0;
  let nickelCount = 0;
  let copperCount = 0;
  let radiumCount = 0;
  let chosenColony = ""
  let html = ""
  for (const colony of colonies) {
    for (const governor of governors) {
      if (transientState.selectedGovernor === governor.id && governor.colonyId === colony.id) {
        chosenColony = colony.name
      }
    }
  }
  html += `<h2>${chosenColony} Minerals</h2>`
  html += `<ul>`
  for (const order of orders) {
    if (order.selectedGovernor === transientState.selectedGovernor) {
      //   order.selectedMineral === 1 ? ironCount ++
      // : order.selectedMineral === 2 ? saltCount ++
      // : order.selectedMineral === 3 ? nickelCount ++
      // : order.selectedMineral === 4 ? copperCount ++
      // : order.selectedMineral === 5 ? radiumCount ++
      // : null
      if (order.selectedMineral === 1) {
        ironCount++
      }
      if (order.selectedMineral === 2) {
        saltCount++
      }
      if (order.selectedMineral === 3) {
        nickelCount++
      }
      if (order.selectedMineral === 4) {
        copperCount++
      }
      if (order.selectedMineral === 5) {
        radiumCount++
      }
    }
  }
  if (ironCount) {
    html += `<li> ${ironCount} tons of iron </li>`
  }
  if (saltCount) {
    html += `<li> ${saltCount} tons of salt </li>`
  }
  if (nickelCount) {
    html += `<li> ${nickelCount} tons of nickel </li>`
  }
  if (copperCount) {
    html += `<li> ${copperCount} tons of copper </li>`
  }
  if (radiumCount) {
    html += `<li> ${radiumCount} tons of radium </li>`
  }


  //   ironCount ? html += `<li>${ironCount} tons of iron</li>`
  // : saltCount ? html += `<li>${saltCount} tons of salt</li>`
  // : nickelCount ? html += `<li>${nickelCount} tons of nickel</li>`
  // : copperCount ? html += `<li>${copperCount} tons of copper</li>`
  // : radiumCount ? html += `<li>${radiumCount} tons of radium</li>`
  // : null

  html += `</ul>`
  return html
}







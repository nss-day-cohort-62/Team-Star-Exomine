import {
  getFacilities,
  getTransientState,
  getMinerals,
  getFacilityMinerals,
  getOrders,
} from "./database.js";

const minerals = getMinerals();
const transientState = getTransientState();
const facilityMinerals = getFacilityMinerals();
const facilities = getFacilities();

export const displayOrder = () => {
  const orders = getOrders();
  let orderFacility = null;
  let orderMineral = null;
  let html = `<ul>`;
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

      html += `<li>
        1 ton of ${orderMineral.name} from ${orderFacility.name}
        </li>`;
    }
  }
  html += `</ul>`;
  return html;
};

import { getFacilityMinerals, getFacilities, getMinerals, getTransientState } from "./database.js";

const minerals = getMinerals()
const facilityMinerals = getFacilityMinerals()
const facilities = getFacilities()
// const transientState = getTransientState()


const facilityMineralMatcher = () => {
    const transientState = getTransientState()
    let matchedMineralFacility = []
    for (const facilityMineral of facilityMinerals) {
        if (transientState.selectedFacility === facilityMineral.facilityId) {
            matchedMineralFacility.push(facilityMineral)
        }
    }
    return matchedMineralFacility
}

export const availableMinerals = () => {
    const matchedMineralFacilities = facilityMineralMatcher()
    const transientState = getTransientState()
    let html = ""
    html += `<h3 class="mineralsHeader">Facility Minerals`
    for (const facility of facilities) {
        if (facility.id === transientState.selectedFacility) {
            html += ` for ${facility.name}`
        }
    }
    html += `</h3>` 
    html += `<ul id="available-minerals">`
    for (const mineral of minerals) {
        for (const matchedMineralFacility of matchedMineralFacilities)
            if (mineral.id === matchedMineralFacility.mineralId) {
                html += `<li>
                        <input type="radio" name="mineral" value="${mineral.id}"/>${mineral.name}
                        </li>`    
            }
    }
    html += `</ul>`
    return html
}



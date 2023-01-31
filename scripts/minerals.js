import { getFacilityMinerals, getFacilities, getMinerals, getTransientState, setMineral } from "./database.js";

document.addEventListener(
    'change',
    (changeEvent) => {
        if (changeEvent.target.id === 'mineral_resource'){
            let chooseOption = changeEvent.target.value
            chooseOption = parseInt(chooseOption)
            setMineral(chooseOption)
        }
    }
)



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
            let checked = ""
            if (transientState.selectedMineral === mineral.id) {
            checked = "checked"
        }
                html += `<li>
                        <input type="radio" name="mineral" id="mineral_resource" value="${mineral.id}" ${checked} /> ${parseInt(matchedMineralFacility.quantity)} tons of ${mineral.name} available
                        </li>`    
            }
    }
    html += `</ul>`
    return html
}

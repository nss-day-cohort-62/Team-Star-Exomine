import { getFacilities, setFacility, getTransientState, setMineral } from "./database.js";

const facilities = getFacilities();


document.addEventListener(
    'change',
    (changeEvent) => {
        if (changeEvent.target.id === 'facilityResource'){
            let chooseOption = changeEvent.target.value
            chooseOption = parseInt(chooseOption)
            setFacility(chooseOption)
            setMineral(null) 
        }
    }
)


let activeFacilities = []
    for (let facility of facilities){
        if(facility.active === true){
            activeFacilities.push(facility)
        }
    }

    
export const facilitySelection = () => {
    const transientState = getTransientState()
    let html = `<h4>Choose a Facility</h4><select class="facility" id="facilityResource">
    <option value="0">Choose a Facility</option>\n`
    for (const facility of activeFacilities) {
        let selected = ""
        if (transientState.selectedFacility === facility.id) {
            selected= "selected"
        }
        html += `<option value="${facility.id}" ${selected}>${facility.name}</option>`
    }
    html += `</select>`
    return html
}


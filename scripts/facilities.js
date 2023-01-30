import { getFacilities, setFacility } from "./database.js";

const facilities = getFacilities();


document.addEventListener(
    'change',
    (changeEvent) => {
        if (changeEvent.target.id === 'facilityResource'){
            let chooseOption = changeEvent.target.value
            chooseOption = parseInt(chooseOption)
            setFacility(chooseOption)
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
    let html = `<h4>Choose a Facility</h4><select class="facility" id="facilityResource">
    <option value="0">Choose a Facility</option>\n`
    for (const facility of activeFacilities) {
        html += `<option value="${facility.id}">${facility.name}</option>`
    }
    html += `</select>`
    return html
}
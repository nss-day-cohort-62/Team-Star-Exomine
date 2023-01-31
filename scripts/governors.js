import { getGovernors, setGovernor, getTransientState, setColony } from "./database.js";

const governors = getGovernors();

document.addEventListener(
    'change',
    (changeEvent) => {
        if (changeEvent.target.id === 'governorResource') {
            let chooseOption = changeEvent.target.value
            let chosenId = changeEvent.target.class
            chooseOption = parseInt(chooseOption)
            setGovernor(chooseOption)
            // setColony(chosenId)

        }
    }
)

export const governorSelection = () => {
    const transientState = getTransientState()
    let html = ""

    html += `<h4>Choose a Governor</h4><select class="resource" id="governorResource">
    <option value="0">Choose a Governor</option>\n`

    for (const governor of governors) {
        let selected = ""
        if (transientState.selectedGovernor === governor.id) {
            selected = "selected"
        }
        html += `<option value="${governor.id}" class= "${governor.colonyId}" ${selected}>${governor.name}</option>`
    }
    html += `</select>`
    return html
}
import { getGovernors, setGovernor } from "./database.js";

const governors = getGovernors();

document.addEventListener(
    'change',
    (changeEvent) => {
        if (changeEvent.target.id === 'governorResource'){
            let chooseOption = changeEvent.target.value
            chooseOption = parseInt(chooseOption)
            setGovernor(chooseOption)
        }
    }
)

export const governorSelection = () => {
    let html = `<h4>Choose a Governor</h4><select class="resource" id="governorResource">
    <option value="0">Choose a Governor</option>\n`
    for (const governor of governors) {
        html += `<option value="${governor.id}">${governor.name}</option>`
    }
    html += `</select>`
    return html
}
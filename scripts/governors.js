import { getGovernors } from "./database.js";

const governors = getGovernors();


export const governorSelection = () => {
    let html = `<h4>Choose a Governor</h4><select class="resource" id="governorResource">
    <option value="0">Choose a Governor</option>\n`
    for (const governor of governors) {
        html += `<option value="${governor.id}">${governor.name}</option>`
    }
    html += `</select>`
    return html
}
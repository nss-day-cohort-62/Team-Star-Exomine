import { exomine } from "./exomine.js"

const mainContainer = document.querySelector("#container")
const renderAllHtml = () => {
    mainContainer.innerHTML = exomine()
}

renderAllHtml()


document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHtml()
})
import { exomine } from "./exomine.js"

const mainContainer = document.querySelector("#container")
const renderAllHtml = () => {
    mainContainer.innerHTML = exomine()
}

renderAllHtml()
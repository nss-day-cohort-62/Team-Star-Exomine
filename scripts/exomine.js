import { governorSelection } from "./governors.js"
import { facilitySelection } from "./facilities.js"
import { availableMinerals } from "./minerals.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => { 
        if (event.target.id === 'orderButton') {
        addCustomOrder()
    }
} 
)

export const exomine = () => {
    return `
    <h1>Solar System Mining MarketPlace</h1>
    <article class="filterAndColonyStatus">
        <section class="filters">
            ${governorSelection()}
        </section>
    <article class="filterFacility">
        <section class="filters">
            ${facilitySelection()}
        </section>
        <section class="colonyStatus">
            <h2>ColonyMinerals</h2>
        </section>
    </article>
    <article class="mineralsAndCart">
        <section id="mineralSelection">
        ${availableMinerals()}
        </section>
        <section id="cart">
            <h3>Space Cart</h3>
            <button id="orderButton">Purchase Minerals</button>
        </section>
    </article>
    `
}
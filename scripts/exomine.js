import { governorSelection } from "./governors.js"
import { facilitySelection } from "./facilities.js"
import { availableMinerals } from "./minerals.js"
import { addCustomOrder } from "./database.js"
import { displayOrder, displayCart } from "./orders.js"

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
            ${facilitySelection()}
        </section>
        <section class="colonyStatus">
            ${displayOrder()}
        </section>
    </article>
    </article>
    <article class="mineralsAndCart">
        <section id="mineralSelection">
        ${availableMinerals()}
        </section>
        <section id="cart">
            <h3>Space Cart</h3>
            ${displayCart()}
            <button id="orderButton">Purchase Minerals</button>
        </section>
    </article>
    `
}
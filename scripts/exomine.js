import { governorSelection } from "./governors.js"

export const exomine = () => {
    return `
    <h1>Solar System Mining MarketPlace</h1>
    <article class="filterAndColonyStatus">
        <section class="filters">
            ${governorSelection()}
        </section>
        <section class="colonyStatus">
            <h2>ColonyMinerals</h2>
        </section>
    </article>
    <article class="mineralsAndCart">
        <section id="mineralSelection">
        
        </section>
        <section id="cart">
            <h3>Space Cart</h3>
            <button id="orderButton">Purchase Minerals</button>
        </section>
    </article>
    `
}
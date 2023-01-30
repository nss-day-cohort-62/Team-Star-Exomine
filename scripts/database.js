const database = {
    transientState: {},
    governors: [
        { id: 1, name: "Wesley Hughes", colonyId: 4, active: true },
        { id: 2, name: "Stephen Byard", colonyId: 2, active: false },
        { id: 3, name: "Kristi Cornett", colonyId: 3, active: true },
        { id: 4, name: "Bartholomoo Diaz", colonyId: 1, active: true },
        { id: 5, name: "Ash Ketchum", colonyId: 5, active: false },
        { id: 6, name: "Professor Oak", colonyId: 4, active: true },
        { id: 7, name: "Mr. Mime's Ghost", colonyId: 2, active: false }
       
    ],
    minerals: [
        { id: 1, name: "Iron" },
        { id: 2, name: "Salt" },
        { id: 3, name: "Nickel" },
        { id: 4, name: "Copper" },
        { id: 5, name: "Radium" }
     ],    
     colonies: [
        { id: 1, name: "Kanto" },
        { id: 2, name: "Johto" },
        { id: 3, name: "Kalos" },
        { id: 4, name: "Middle Earth" },
        { id: 5, name: "Sinnoh" }
     ],    
     facilities: [
        { id: 1, name: "Pallet Town", active: true },
        { id: 2, name: "Hogwarts", active: true },
        { id: 3, name: "Rivendell", active: true },
        { id: 4, name: "Mordor", active: false },
        { id: 5, name: "Isengaard", active: true },
        { id: 6, name: "Dublin", active: true }
    ],
    facilityMinerals: [
        { id: 1, facilityId: 1, mineralId: 1 },
        { id: 2, facilityId: 1, mineralId: 2 },
        { id: 3, facilityId: 2, mineralId: 3 },
        { id: 4, facilityId: 2, mineralId: 4 },
        { id: 5, facilityId: 2, mineralId: 5 },
        { id: 6, facilityId: 3, mineralId: 1 },
        { id: 7, facilityId: 4, mineralId: 1 },
        { id: 8, facilityId: 4, mineralId: 4 },
        { id: 9, facilityId: 4, mineralId: 5 },
        { id: 10, facilityId: 5, mineralId: 3 },
        { id: 11, facilityId: 6, mineralId: 2 },
        { id: 12, facilityId: 6, mineralId: 5 }
    ],
    orders: [
        { id: 1, mineralId: 1, governorId: 4, colonyId: 1, facilityId: 1, timestamp: 1614659931693 },
    ],
    orderBuilder: {}
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getFacilities = () => {
    return database.facilities.map(facility => ({ ...facility }))
}

export const purchaseMineral = () => {

    // Broadcast custom event to entire documement so that the
    // application can re-render and update state
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}

export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}

export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(facilityMineral => ({ ...facilityMineral }))
}

export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}

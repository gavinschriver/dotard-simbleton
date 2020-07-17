import {useBusinesses} from "./BusinessProvider.js"
import {NYBusinesses} from "./BusinessProvider.js";
import {business} from "./Business.js"

const targetArea = document.querySelector(".container")

export const activeBusinesses = ( ) => {

    const allBusinessObjects =  useBusinesses( )

    targetArea.innerHTML = `<h2>Active Businesses</h2>`

    allBusinessObjects.forEach(
        businessObject => targetArea.innerHTML += business(businessObject)
    )
}


export const listNYBusinesses = ( ) => {

    const NYBusinessObjects = NYBusinesses()

    targetArea.innerHTML += `<h2>New York Businesses</h2>`

    NYBusinessObjects.forEach(
        NYBusinessObj => targetArea.innerHTML += business(NYBusinessObj)
    )
}
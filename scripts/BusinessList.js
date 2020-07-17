import {useBusinesses} from "./BusinessProvider.js"
import {business} from "./Business.js"

const targetArea = document.querySelector(".container")

export const activeBusinesses = ( ) => {

    const allBusinessObjects =  useBusinesses( )

    targetArea.innerHTML = `<h2>Active Businesses</h2>`

    allBusinessObjects.forEach(
        businessObject => targetArea.innerHTML += business(businessObject)
    )
}
import {useBusinessList} from "./BusinessProvider.js"
import {business} from "./Businesses.js"

const targetArea = document.querySelectory(".container")

export const activeBusinesses = ( ) => {

    const allBusinessObjects =  useBusinessList( )

    targetArea.innerHTML = `<h2>Active Businesses</h2>`

    allBusinessObjects.forEach(
        businessObject => targetArea.innerHTML += business(businessObject)
    )
}
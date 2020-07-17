import {useBusinesses} from "./BusinessProvider.js"
import {NYBusinesses} from "./BusinessProvider.js";
import {manufacturingCompanies} from "./BusinessProvider.js"
import {business} from "./Business.js"


export const activeBusinesses = ( ) => {

    const targetArea = document.querySelector(".container")
    
    const allBusinessObjects =  useBusinesses( )

    targetArea.innerHTML = `<h2>Active Businesses</h2>`

    allBusinessObjects.forEach(
        businessObject => targetArea.innerHTML += business(businessObject)
    )
}


export const listNYBusinesses = ( ) => {

    const targetArea = document.querySelector(".businessList--newYork")

    const NYBusinessObjects = NYBusinesses()

    targetArea.innerHTML += `<h2>New York Businesses</h2>`

    NYBusinessObjects.forEach(
        NYBusinessObj => targetArea.innerHTML += business(NYBusinessObj)
    )
}

export const listManufacturingCompanies = ( ) => {

    const targetArea = document.querySelector(".businessList--manufacturing")

    const manufacturingCompanyObjects = manufacturingCompanies()

    targetArea.innerHTML += `<h2>Manufacturing Companies</h2>`

    manufacturingCompanyObjects.forEach(
        manufacturingComopanyObj => targetArea.innerHTML += business(manufacturingComopanyObj)
    )
}
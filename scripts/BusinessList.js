import { useBusinesses, NYBusinesses, manufacturingCompanies } from "./BusinessProvider.js";
import { business } from "./Business.js";

//functions that render different kinds of lists on the DOM
export const activeBusinesses = () => {
  const targetArea = document.querySelector(".businessList--all");

  const allBusinessObjects = useBusinesses();

  targetArea.innerHTML = `<h2 class=listHeader>Active Businesses</h2>`;

  allBusinessObjects.forEach(
    (businessObject) => (targetArea.innerHTML += business(businessObject))
  );
};

export const listNYBusinesses = () => {
  const targetArea = document.querySelector(".businessList--newYork");

  const NYBusinessObjects = NYBusinesses();

  targetArea.innerHTML += `<h2 class=listHeader>New York Businesses</h2>`;

  NYBusinessObjects.forEach(
    (NYBusinessObj) => (targetArea.innerHTML += business(NYBusinessObj))
  );
};

export const listManufacturingCompanies = () => {
  const targetArea = document.querySelector(".businessList--manufacturing");

  const manufacturingCompanyObjects = manufacturingCompanies();

  targetArea.innerHTML += `<h2 class=listHeader>Manufacturing Companies</h2>`;

  manufacturingCompanyObjects.forEach(
    (manufacturingComopanyObj) =>
      (targetArea.innerHTML += business(manufacturingComopanyObj))
  );
};

// event madness!!!!!

const companySearchResultArticle = document.querySelector(".foundCompanies");

//assign result of calling useBusinesses() to var called copyOfBusinesses (an array of all the businesses, to be used in remaining code)
const copyOfBusinesses = useBusinesses();

//add an event handler called sweetEventBro to the onkeypress event of the element in the document with the id #companyseach
document.querySelector("#companySearch").addEventListener("keypress", (sweetEventBro) => {
    //if enter is pressed
    if (sweetEventBro.charCode === 13) {

      //begin a function that compares value of the target of the 'sweetEventBro' function (aka whatever was input into #companySearch) with the first or last name of the purchasing agent for each business and, if true, returns the whole object found at that array position as a var called returnMatchingBusiness

      const returnMatchingBusiness = (myBusinesses) =>
        myBusinesses.find((business) =>
        business.purchasingAgent.nameFirst.includes(sweetEventBro.target.value) || business.purchasingAgent.nameLast.includes(sweetEventBro.target.value)
        );


      //assign the value of calling returnMatchingBusiness with the copyOfBusinesses array to a new var, foundBusinesses  
      const foundBusiness = returnMatchingBusiness(copyOfBusinesses);

      //begin HTML maker

      companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
    }
  });

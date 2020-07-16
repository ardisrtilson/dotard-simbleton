import { useBusinesses} from "./BusinessProvider.js"
import { BusinessHTML } from "./Business.js"
import { businessesFiltered } from "./businessFilter.js"

const contentTarget = document.querySelector(".dotard")
const contentTarget2 = document.querySelector(".businessList--newYork")

export const BusinessList = () => {
    const filteredArray = businessesFiltered
    const businessesArray = useBusinesses()
    businessesArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += BusinessHTML(businessObject)
        }
    );
    filteredArray.forEach(
        (businessObject) => {
            contentTarget2.innerHTML += BusinessHTML(businessObject)
        }
    );
}


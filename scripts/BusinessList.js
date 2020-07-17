import { useBusinesses} from "./BusinessProvider.js"
import { BusinessHTML, agentHTML} from "./Business.js"
import { businessesFiltered } from "./businessFilter.js"
import { agentNames} from "./agentFilter.js"

const contentTarget = document.querySelector(".dotard")
const contentTarget2 = document.querySelector(".businessList--newYork")
const contentTarget3 = document.querySelector(".agents")

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
    agentNames.forEach(
        (businessObject) => {
            contentTarget3.innerHTML += agentHTML(businessObject)
        }
    );
}


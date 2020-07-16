import { useBusinesses } from "./BusinessProvider.js"
import { BusinessHTML } from "./Business.js"

const contentTarget = document.querySelector(".dotard")

export const BusinessList = () => {
    const businessesArray = useBusinesses()
    businessesArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += BusinessHTML(businessObject)
        }
    );
}
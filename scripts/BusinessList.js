import { useBusinesses } from "./BusinessProvider.js"
import { BusinessHTML } from "./Business.js"

const contentTarget = document.querySelector(".businesses")

export const BusinessList = () => {
    const businessesArray = useBusinesses()
    contentTarget.innerHTML = "<h1>Dotard and Simbleton</h1>"

    businesses.forEach(
        (businessObject) => {
            contentTarget.innerHTML += BusinessHTML(businessObject)
        }
    );
}
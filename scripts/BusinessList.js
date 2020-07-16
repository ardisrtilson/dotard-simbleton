import { useBusinesses } from "./SuppliesProvider.js"
import { Business } from "./Business.js"

const contentTarget = document.querySelector(".businesses")

const SupplyList = () => {
    const businessesArray = useBusinesses()
    contentTarget.innerHTML = "<h1>Art Supplies</h1>"

    supplies.forEach(
        (supplyObject) => {
            contentTarget.innerHTML += Business(supplyObject)
        }
    );
}
import { useBusinesses } from "./BusinessProvider.js"

const business = useBusinesses ()
export const businessesFiltered = business.filter(businessesObject => {
    if (businessesObject.addressStateCode === "NY") {
        return true
    }
  return false
  })
  
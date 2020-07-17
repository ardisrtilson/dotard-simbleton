import { useBusinesses } from "./BusinessProvider.js"

const businesses = useBusinesses ()

export const findByCompanyName = (searchCriteria) => {
    return businesses.find(business => business.companyName = searchCriteria)
}
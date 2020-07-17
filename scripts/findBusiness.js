import { useBusinesses } from "./BusinessProvider.js"

const businesses = useBusinesses ()

export const findByCompanyName = (searchCriteria) => {
    return businesses.find(business => {
        return business.purchasingAgent.nameLast === searchCriteria ||
            business.purchasingAgent.nameFirst === searchCriteria || 
            business.companyName === searchCriteria 
}
)
}
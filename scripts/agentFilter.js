import { useBusinesses } from "./BusinessProvider.js"

const businesses = useBusinesses ()

export const agentNames = businesses.map(agentObject => {
    return agentObject.purchasingAgent
  })       
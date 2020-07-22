import { useBusinesses } from "./BusinessProvider.js"

const businesses = useBusinesses ()

export const agentNames = businesses.map(agentObject => {
    return {
      agentName: `${agentObject.purchasingAgent.nameFirst} ${agentObject.purchasingAgent.nameLast}`,
      company: agentObject.companyName,
      phoneNumber: agentObject.phoneWork}
  })
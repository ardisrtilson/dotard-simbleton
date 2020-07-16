export const BusinessHTML = (businessObject) => {
    return `
        <section class="business">
            <h2 class="business__type">${businessObject.purchasingAgent.nameLast}</h2>
            <h2 class="business__type">${businessObject.purchasingAgent.nameFirst}</h2>
            <h2 class="business__type">${businessObject.phoneWork}</h2>
            <h2 class="business__type">${businessObject.orders}</h2>
            <h2 class="business__type">${businessObject.companyName}</h2>
            <h2 class="business__type">${businessObject.companyIndustry}</h2>
            <h2 class="business__type">${businessObject.addressZipCode}</h2>
            <h2 class="business__type">${businessObject.addressStateCode}</h2>
            <h2 class="business__type">${businessObject.addressFullStreet}</h2>
            <h2 class="business__type">${businessObject.addressCity}</h2>
        </section>
    `
}

export const useBusinesses = () => {
    return businesses.slice()
}
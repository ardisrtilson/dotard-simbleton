export const BusinessHTML = (businessObject) => {
    return `
        <section class="business">
            <h1 class="business__name">${businessObject.companyName}</h2>
<frameset>
            <h2 class="business__type">${businessObject.addressFullStreet}</h2>
            <h2 class="business__type">${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</h2>
            </frameset>
            </section>
    `
}

export const useBusinesses = () => {
    return businesses.slice()
}
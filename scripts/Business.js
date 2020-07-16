export const Business = (businessObject) => {
    return `
        <section class="business">
            <h2 class="business__type">${businessObject.type}</h2>
            <div class="business__price">
                Price: ${businessObject.price}
            </div>
        </section>
    `
}
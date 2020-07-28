const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelectorAll(".people")

// export const FullTicket = () => {
//     eventHub.addEventListener("fullTicketPurchase", event => {
//         for(const classes of contentTarget) {
//             classes.innerHTML += 
//             `<div class="person bigSpender"></div>`
//         }
//     })
// }

export const FullTicket = () => {
    eventHub.addEventListener("fullTicketPurchase", event => {
        contentTarget.forEach(classes => 
            classes.innerHTML += 
            `<div class="person bigSpender"></div>`)
    } )
}
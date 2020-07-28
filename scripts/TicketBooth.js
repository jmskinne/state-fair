const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("rideTicket")) {

        const ticket = clickEvent.target.value

        const rideEvent = new RideEvent("rideTicketPurchased", {
            detail: {
                purchasedRideTicket : ticket
            }

        })
    }
    eventHub.dispatchEvent(rideEvent)
}) 

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket>Ride Ticket</button>
        </div>
    `
}


const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".customers")

let totalTicket = 0
export const TotalTickets = () => {
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id) {
            totalTicket++
        }  
            
        
        contentTarget.innerHTML = `Total tickets = ${totalTicket}`
    
})}



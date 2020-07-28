const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".rides")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", event => {
        contentTarget.innerHTML += `
            <div class="person rider"></div>
        `
        

    })
            
        
    
}
       
      

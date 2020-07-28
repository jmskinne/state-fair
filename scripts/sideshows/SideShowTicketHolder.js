const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".sideshow")

export const SideShowTicketHolders = () => {
    eventHub.addEventListener("sideTicketPurchased", event => {
        contentTarget.innerHTML += `
            <div class="person gawker"></div>
        `
        

    })
            
        
    
}

const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".food")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", event => {
        contentTarget.innerHTML += `
            <div class="person eater"></div>
        `
        

    })
            
        
    
}
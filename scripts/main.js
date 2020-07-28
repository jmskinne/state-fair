// Import and invoke the ticket booth component function
import {TicketBooth } from "./TicketBooth.js"
import { RideTicketHolders } from "./rides/RideTicketHolders.js"
import { FoodTicketHolders } from "./food/FoodTicketHolder.js"
import { GameTicketHolders } from "./games/GameTicketHolder.js"
import { SideShowTicketHolders } from "./sideshows/SideShowTicketHolder.js"
import { FullTicket } from "./fullpackage/FullPackageTicket.js"
import { TotalTickets } from "./TotalTickets.js"

TicketBooth()
RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
SideShowTicketHolders()
FullTicket()
TotalTickets()
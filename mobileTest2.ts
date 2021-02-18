import { Mobile } from "./mobile"

let Nokia3210: Mobile = new Mobile("Nokia 3210", 3210, "Nokia", 6, "azul", false, 0, 65)
let iPhone3G: Mobile = new Mobile("Iphone3G", 3, "Apple", 8, "negro", false, 2, 120)
let SamsungGalaxy10: Mobile = new Mobile("Samsung Galaxy 10", 10, "Samsung", 32, "plata", true, 2, 200)
let mobiles: Mobile[] = [Nokia3210, iPhone3G, SamsungGalaxy10];

console.log(Nokia3210.getcameraNumber())
console.log(Nokia3210.getPrice())
console.log(Nokia3210.getColor())
console.log(iPhone3G.getModel())
console.log(SamsungGalaxy10.getSdSize())
console.log()
Nokia3210.setCameraNumber(4)
Nokia3210.setiS5G(true)
mobiles.toString()
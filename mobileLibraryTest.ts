import {MobileLibrary} from "./mobileLibrary"
import { Mobile } from "./mobile"
let mobile1: Mobile = new Mobile("Nokia 3210", 3210, "Nokia", 6, "azul", false, 0, 65)
let mobile2: Mobile = new Mobile("Iphone3G", 3, "Apple", 8, "negro", false, 2, 120)
let mobile3: Mobile = new Mobile("Samsung Galaxy 10", 10, "Samsung", 32, "plata", true, 2, 200)
let mobile4: Mobile = new Mobile ("OnePlus",800, "OnePlus", 64,"azul",true, 3, 355)

let mobiles: Mobile[] = [mobile1,mobile2,mobile3,mobile4];
let muchosMobiles: MobileLibrary = new MobileLibrary("PhoneLibrary","LemonCity",mobiles,0)
console.log(muchosMobiles.getLocation())
console.log(muchosMobiles.getMobiles())
console.log(muchosMobiles.getName())
console.log(muchosMobiles.totalPriceCalculation())
console.log(muchosMobiles.setLocation("Barrio Sesamo"))
console.log(muchosMobiles.getLocation())
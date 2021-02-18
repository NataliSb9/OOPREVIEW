import {Mobile} from "./mobile"

let Nokia3210:Mobile = new Mobile("Nokia 3210",3210,"Nokia",6, "azul",false,0,65)
let iPhone3G: Mobile = new Mobile ("Iphone3G",3,"Apple",8, "negro", false, 2, 120)
let SamsungGalaxy10: Mobile = new Mobile ("Samsung Galaxy 10", 10, "Samsung", 32,"plata",true, 2, 200 )
let mobiles: Mobile[] = [Nokia3210,iPhone3G,SamsungGalaxy10];

//console.log(Nokia3210.cameraNumber)
//console.log(Nokia3210.is5G)
console.log(Nokia3210)
console.log(iPhone3G)
console.log(SamsungGalaxy10)
console.log(mobiles)
//Nokia3210.cameraNumber = 4;
//Nokia3210.is5G =true
console.log(Nokia3210.toString())
console.log(mobiles.toString())
import { Mobile } from "./mobile"
export class MobileLibrary {
    private name: string;
    private location: string;
    private mobiles: Mobile[];
    private totalPrice: number;

    constructor(name: string, location: string, mobile: Mobile[]) {
        this.name = name;
        this.location = location;
        this.mobiles = mobile;
        this.totalPrice = this.totalPriceCalculation()
    }
    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getLocation(): string {
        return this.location;
    }

    public setLocation(location: string) {
        this.location = location;
    }

    public getMobiles(): Mobile[] {
        return this.mobiles;
    }

    public setMobiles(mobiles: Mobile[]) {
        this.mobiles = mobiles;
    }

    public getTotalPrice(): number {
        return this.totalPrice;
    }

    public setTotalPrice(totalPrice: number) {
        this.totalPrice = totalPrice;
    }
    private totalPriceCalculation():number{
        let price: number = 0
        for(let i = 0; i< this.mobiles.length; i++){
            price = this.mobiles[i].getPrice() + price
            this.totalPrice = price
        }
        
        return this.totalPrice
    }
    public printLibrary() {
        let resultado: string = ""
        for(let i=0; i< this.mobiles.length; i++){
            resultado += this.mobiles[i].toString()
        }
        console.log("This is all my mobiles: "+"\n"+ resultado + "\n"+ "Price overall:" + this.totalPrice)
    }
}
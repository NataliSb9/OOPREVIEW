export class Mobile {
    private name: string;
    private model: number;
    private trademark: string;
    private sdSize: number;
    private color: string;
    private is5G: boolean;
    private cameraNumber: number;
    private price: number;

    constructor(name: string, model: number, trademark: string, sdSize: number, color: string, is5G: boolean, cameraNumber: number, price: number) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }


    public toString() {
        console.log("The characteristics of the mobile " + this.name + " are:" + "\n" + "  " + "Name: " + this.name + "\n" + "  " + "Model:" + this.model + "\n" + "  " + "Trademark:" + this.trademark + "\n" + "  " + "SD Size (GB):" + this.sdSize + "\n" + "  " + "Color:" + this.color + "\n" + "  " + "Is 5G?:" + this.is5G + "\n" + "  " + "Number of Cameras:" + this.cameraNumber)
    }
    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }
    public getModel(): number {
        return this.model;
    }

    public setModel(model: number) {
        this.model = model;
    }

    public getTrademark(): string {
        return this.trademark;
    }

    public setTrademark(trademark: string) {
        this.trademark = trademark;
    }

    public getSdSize(): number {
        return this.sdSize;
    }

    public setSdSize(sdSize: number) {
        this.sdSize = sdSize;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string) {
        this.color = color;
    }

    public getiS5G(): boolean {
        return this.is5G;
    }

    public setiS5G(is5G: boolean
    ) {
        this.is5G = is5G;
    }

    public getcameraNumber(): number {
        return this.cameraNumber;
    }

    public setCameraNumber(cameraNumber: number
    ) {
        this.cameraNumber = cameraNumber;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number) {
        this.price = price;
    }
}

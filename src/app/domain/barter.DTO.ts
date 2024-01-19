export class MarketItemDTO {

    name: string;
    price: number;
    countryName: string;
    description: string;
    quota: number;
    isSecondHand: boolean;
    productTypeId: number;

    constructor(name: string, price: number, countryName: string, description: string, quota: number = 0, isSecondHand: boolean, productTypeId: number){
        this.name = name;
        this.price = price;
        this.countryName = countryName;
        this.description = description;
        this.quota = quota;
        this.isSecondHand = isSecondHand
        this.productTypeId = productTypeId;
    }
}
export class MarketItemDTO {

    name: string;
    price: number;
    countryName: string;
    description: string;
    quota: number;

    constructor(name: string, price: number, countryName: string, description: string, quota: number = 0){
        this.name = name;
        this.price = price;
        this.countryName = countryName;
        this.description = description;
        this.quota = quota;
    }
}
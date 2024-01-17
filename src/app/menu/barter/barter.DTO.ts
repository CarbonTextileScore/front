export class MarketItemDTO {
    title: string;
    price: number;
    city: string;
    description: string;
    imageLink: string;
    link: string;

    constructor(title: string, price: number, city: string, description: string, imageLink: string = 'https://siecledigital.fr/wp-content/uploads/2017/05/Rickroll.jpg', link: string = '#'){
        this.title = title;
        this.price = price;
        this.city = city;
        this.description = description;
        this.imageLink = imageLink;
        this.link = link;
    }
}
export class User {

    id: number;
    name: string;
    lastname: string;
    cityId: number;
    age: number;

    constructor(id: number, name: string, lastname: string, cityId: number, age: number){
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.cityId = cityId;
        this.age = age;
    }

}
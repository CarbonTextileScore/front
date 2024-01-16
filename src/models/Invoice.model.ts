export class Invoice{

    id: number;
    date: Date;
    quota: number;
    userId: number;

    constructor(id: number, date: Date, quota: number, userId: number){
        this.id = id;
        this.date = date;
        this.quota = quota;
        this.userId = userId;
    }

}
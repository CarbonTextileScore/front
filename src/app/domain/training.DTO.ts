export class TrainingDTO {

    id: number;
    name: string;
    video: string;
    categoryId: number;
    score: number;
    userFullName: string;
    userPicture: string;

    constructor(id: number, name: string, video: string, categoryId: number, score: number, userFullName: string, userPicture: string){
        this.id = id;
        this.name = name;
        this.video = video;
        this.categoryId = categoryId;
        this.score = score;
        this.userFullName = userFullName;
        this.userPicture = userPicture;
    }

}
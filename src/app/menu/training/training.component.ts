import { Component, OnInit } from '@angular/core';
import { trainingDTO } from './training.DTO';
import { VideoCategoryModel } from 'src/models/VideoCategory.model';
import { User } from 'src/models/User.model';

interface FilteredDTO {
  categoryId: number;
  categoryName: string;
  videoList: trainingDTO[]
}

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit{

  users: User[] = [
    new User(2, "Jade", "Christien", 14, 22)
  ]

  videoCategories: VideoCategoryModel[] = [
    new VideoCategoryModel(1, "Créez vos vêtements"),
    new VideoCategoryModel(2, "Recyclez vos vêtements"),
    new VideoCategoryModel(3, "Réutilisez vos vêtements")
  ]

  private videoPicture: string = "/assets/resources/video_picture.jpg";
  private userPicture: string = "/assets/resources/user_picture.jpg";

  videos: trainingDTO[] = [
    new trainingDTO(1, "Comment faire un T-shirt", this.videoPicture, 1, 4.2, "Jade Christien", this.userPicture),
    new trainingDTO(1, "Comment faire un T-shirt", this.videoPicture, 1, 4.2, "Jade Christien", this.userPicture),
    new trainingDTO(1, "Comment faire un T-shirt", this.videoPicture, 1, 4.2, "Jade Christien", this.userPicture),
    new trainingDTO(1, "Comment faire un T-shirt", this.videoPicture, 1, 4.2, "Jade Christien", this.userPicture),
    new trainingDTO(1, "Comment faire un T-shirt", this.videoPicture, 1, 4.2, "Jade Christien", this.userPicture),
    new trainingDTO(1, "Comment recycler un T-shirt", this.videoPicture, 2, 4.2, "Jade Christien", this.userPicture),
    new trainingDTO(1, "Comment recycler un T-shirt", this.videoPicture, 2, 4.2, "Jade Christien", this.userPicture),
    new trainingDTO(1, "Comment réutiliser un T-shirt", this.videoPicture, 3, 4.2, "Jade Christien", this.userPicture),
    new trainingDTO(1, "Comment réutiliser un T-shirt", this.videoPicture, 3, 4.2, "Jade Christien", this.userPicture),
    new trainingDTO(1, "Comment réutiliser un T-shirt", this.videoPicture, 3, 4.2, "Jade Christien", this.userPicture),
    new trainingDTO(1, "Comment réutiliser un T-shirt", this.videoPicture, 3, 4.2, "Jade Christien", this.userPicture),
  ];

  filteredVideoList: FilteredDTO[] = [];


  ngOnInit(): void {
    let categoriesDistinctes = [...new Set(this.videos.map(item => item.categoryId))];
    categoriesDistinctes.forEach(categoryId => {
      let category = this.videoCategories.find(category => category.id === categoryId);
      let categoryName = category ? category.name : "";
      const filteredVideos: FilteredDTO = {
        categoryId: categoryId,
        categoryName: categoryName,
        videoList: this.videos.filter(item => item.categoryId === categoryId)
      };
      this.filteredVideoList.push(filteredVideos)
    });
  }

  

}

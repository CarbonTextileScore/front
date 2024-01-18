import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TrainingDTO } from '../../domain/training.DTO';
import { VideoCategoryModel } from 'src/models/VideoCategory.model';
import { MatDialog } from '@angular/material/dialog';
import { TrainingDialogComponent } from './training-dialog/training-dialog.component';
import { TrainingService } from './training.service';

interface FilteredDTO {
  categoryId: number;
  categoryName: string;
  videoList: TrainingDTO[]
}

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit, AfterViewInit {

  // Fausses données pour tester sans API

  videoCategories: VideoCategoryModel[] = [
    new VideoCategoryModel(1, "Créez vos vêtements"),
    new VideoCategoryModel(2, "Recyclez vos vêtements"),
    new VideoCategoryModel(3, "Réutilisez vos vêtements")
  ]

  private videoPicture: string = "/assets/resources/video_picture.jpg";
  private userPicture: string = "/assets/resources/user_picture.jpg";

  videos: TrainingDTO[] = [
    new TrainingDTO(1, "Comment faire un T-shirt", this.videoPicture, 1, 4.1, "Jade Christien", this.userPicture),
    new TrainingDTO(1, "Comment faire un T-shirt", this.videoPicture, 1, 4.2, "Jade Christien", this.userPicture),
    new TrainingDTO(1, "Comment faire un T-shirt", this.videoPicture, 1, 4.3, "Jade Christien", this.userPicture),
    new TrainingDTO(1, "Comment faire un T-shirt", this.videoPicture, 1, 4.4, "Jade Christien", this.userPicture),
    new TrainingDTO(1, "Comment faire un T-shirt", this.videoPicture, 1, 4.5, "Jade Christien", this.userPicture),
    new TrainingDTO(1, "Comment recycler un T-shirt", this.videoPicture, 2, 4.1, "Jade Christien", this.userPicture),
    new TrainingDTO(1, "Comment recycler un T-shirt", this.videoPicture, 2, 4.2, "Jade Christien", this.userPicture),
    new TrainingDTO(1, "Comment réutiliser un T-shirt", this.videoPicture, 3, 4.1, "Jade Christien", this.userPicture),
    new TrainingDTO(1, "Comment réutiliser un T-shirt", this.videoPicture, 3, 4.2, "Jade Christien", this.userPicture),
    new TrainingDTO(1, "Comment réutiliser un T-shirt", this.videoPicture, 3, 4.3, "Jade Christien", this.userPicture),
    new TrainingDTO(1, "Comment réutiliser un T-shirt", this.videoPicture, 3, 4.4, "Jade Christien", this.userPicture),
  ];

  // Variables
  filteredVideoList: FilteredDTO[] = [];
  @ViewChildren('scrollContainer') scrollContainers!: QueryList<ElementRef>;
  scrollValue: number = 600;

  constructor(
    private trainingService: TrainingService,
    private dialog: MatDialog
    ){}


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

    // this.trainingService.getCategories().subscribe((categories)=>{
    //   this.videoCategories = categories;
    //   this.trainingService.getVideos().subscribe((videos)=>{
    //     this.videos = videos;

    //     let categoriesDistinctes = [...new Set(this.videos.map(item => item.categoryId))];
    //     categoriesDistinctes.forEach(categoryId => {
    //       let category = this.videoCategories.find(category => category.id === categoryId);
    //       let categoryName = category ? category.name : "";
    //       const filteredVideos: FilteredDTO = {
    //         categoryId: categoryId,
    //         categoryName: categoryName,
    //         videoList: this.videos.filter(item => item.categoryId === categoryId)
    //       };
    //       this.filteredVideoList.push(filteredVideos)
    //     });    

    //   });
    // });
  }

  ngAfterViewInit() {
    this.scrollContainers.forEach((container, index) => {
      this.checkVisibility(container.nativeElement, index);
    });
  }

  openMedia(video: TrainingDTO){
    console.log(1, video);
    this.dialog.open(TrainingDialogComponent, {
      data: video,
    });
  }
 
  scroll(index: number, direction: string) {
    const container = this.scrollContainers.toArray()[index].nativeElement;
    if(direction == "left"){
      container.scrollLeft -= this.scrollValue;
    }else if(direction == "right"){
      container.scrollLeft += this.scrollValue;
    }
      this.checkVisibility(container, index);
  }
  
  checkVisibility(container: HTMLElement, index: number) {
    const leftButton = document.getElementById(`left${index}`);
    const rightButton = document.getElementById(`right${index}`);
    if (leftButton && rightButton) {
      leftButton.style.display = container.scrollLeft === 0 ? 'none' : 'block';
      rightButton.style.display = container.scrollLeft + container.clientWidth >= container.scrollWidth ? 'none' : 'block';
    }
  }

}

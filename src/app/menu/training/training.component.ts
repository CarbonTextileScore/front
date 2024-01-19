import { AfterViewChecked, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TrainingDTO } from '../../domain/training.DTO';
import { VideoCategoryModel } from 'src/models/VideoCategory.model';
import { MatDialog } from '@angular/material/dialog';
import { TrainingService } from './training.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

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
export class TrainingComponent implements OnInit, AfterViewChecked {
  
  videoPicture: string = "/assets/resources/video_picture.jpg";
  userPicture: string = "/assets/resources/user_picture.jpg";

  categories: VideoCategoryModel[] = [];
  videos: TrainingDTO[] = [];
  filteredVideoList: FilteredDTO[] = [];

  @ViewChildren('scrollContainer') scrollContainers!: QueryList<ElementRef>;
  scrollValue: number = 600;

  constructor(
    private trainingService: TrainingService,
    private dialog: MatDialog,
    public sanitizer: DomSanitizer,
    public router: Router
  ){}

  ngOnInit(): void {
    this.trainingService.getCategories().subscribe((categories)=>{
      this.categories = categories;

      this.trainingService.getVideos().subscribe((videos)=>{
        this.videos = videos;

        let categoriesDistinctes = [...new Set(this.videos.map(item => item.categoryId))];
        categoriesDistinctes.forEach(categoryId => {
          let category = this.categories.find(category => category.id === categoryId);
          let categoryName = category ? category.name : "";
          const filteredVideos: FilteredDTO = {
            categoryId: categoryId,
            categoryName: categoryName,
            videoList: this.videos.filter(item => item.categoryId === categoryId)
          };
          this.filteredVideoList.push(filteredVideos)
        });    
        
      });
    });
  }

  ngAfterViewChecked(): void {
    this.scrollContainers.forEach((container, index) => {
      this.checkVisibility(container.nativeElement, index);
    });
  }

  openMedia(video: TrainingDTO){
    // console.log(1, video);
    // this.dialog.open(TrainingDialogComponent, {
    //   data: video,
    // });
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

  redirectToYouTubeVideo(youtubeUrl: string) {
    window.open(youtubeUrl, '_blank');
  }

}

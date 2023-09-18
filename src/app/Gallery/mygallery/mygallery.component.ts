import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { ImageService } from 'src/app/images/shared/image.service';

@Component({
  selector: 'app-mygallery',
  templateUrl: './mygallery.component.html',
  styleUrls: ['./mygallery.component.css']
})
export class MygalleryComponent implements OnChanges{
  title = 'Recent Photos';
  @Input() filterBy: string = 'all';

  visibleImages: any[] = [];
  constructor(public imageService: ImageService)
  {
    this.visibleImages = this.imageService.getImages();
  }
  ngOnChanges()
  {
    this.visibleImages = this.imageService.getImages();  
  }

  // Component Class

  setFilter(filter: string) {
   this.filterBy = filter; 
}

}



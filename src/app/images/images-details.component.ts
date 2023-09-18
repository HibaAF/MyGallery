import { Component, OnInit } from '@angular/core';
import { ImageService } from './shared/image.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-images-details',
  templateUrl: './images-details.component.html',
  styleUrls: ['./images-details.component.css']
})
export class ImagesDetailsComponent implements OnInit
{
  image: any;

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.image = this.imageService.getImage(id);
  }

}

/*ngOnInit(): This method runs when the component initializes after construction. It's a good place to fetch initial data.

this.route.snapshot: This gets the current "snapshot" of the route state from the ActivatedRoute service.

params['id']: This retrieves the route parameter with the name 'id'. The plus (+) converts it to a number.

this.imageService.getImage(id): This calls the image service to get the image data by the id parameter.

this.image: This assigns the retrieved image to the component's image property to be displayed.*/
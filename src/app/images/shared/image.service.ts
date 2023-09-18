import { Injectable } from '@angular/core'

export interface Image {
    id: number;
    category: string;
    caption: string;
    url: string;
  }

  @Injectable()
  export class ImageService {
  
    visibleImages: Image[] = [];
    
    constructor() { }
  
    getImages(): Image[] {
      this.visibleImages = IMAGES.slice();
      return this.visibleImages;
    }
  
    getImage(id: number): Image | undefined {
      return this.visibleImages.find(img => img.id === id);
    }
  
  }

const IMAGES = 
[
     {
        'id': 1, 
        'category': 'Autumn', 
        'caption': 'Boots, scarves and pumpkin spice - must be fall!',
        'url': 'assets/img/Fall01.jpg'
    },
    {
        'id': 2, 
        'category': 'Sweets', 
        'caption': 'Sweater weather and pumpkin flavor, autumn days are the best days.',
        'url': 'assets/img/Fall02.jpg'
    },
    {
        'id': 3, 
        'category': 'Peace', 
        'caption': 'Forests blaze in autumn,s flame before leaves descend like ember rain.',
        'url': 'assets/img/Fall03.jpg'
    },
    {
        'id': 4, 
        'category': 'Sweets', 
        'caption': 'Pumpkin spice and everything nice about autumn.',
        'url': 'assets/img/Fall04.jpg'
    },
    {
        'id': 5, 
        'category': 'Peace', 
        'caption': 'A stroll through leaves that crunch under autumn step.',
        'url': 'assets/img/Fall05.jpg'
    },
    {
        'id': 6, 
        'category': 'Sweets', 
        'caption': 'Fall spices up the seasons with its palette of auburn, amber and gold.',
        'url': 'assets/img/Fall06.jpg'
    },
    {
        'id': 7, 
        'category': 'Peace', 
        'caption': 'Golden leaves cascade in nature,s autumn confetti.',
        'url': 'assets/img/Fall07.jpg'
    },
    {
        'id': 8, 
        'category': 'Peace', 
        'caption': 'Crisp air and picturesque scenes - hallmarks of autumn splendor.',
        'url': 'assets/img/Fall08.jpg'
    },
    {
        'id': 9, 
        'category': 'Leaves', 
        'caption': 'Crisp autumn air and trees dressed in warm hues.',
        'url': 'assets/img/Fall09.jpg'
    },
    {
        'id': 10, 
        'category': 'Leaves', 
        'caption': 'Leaves of gold and crimson paint the autumn landscape.',
        'url': 'assets/img/Fall10.jpg'
    },
    {
        'id': 11, 
        'category': 'Leaves', 
        'caption': 'Autumn, the year,s last loveliest smile.',
        'url': 'assets/img/Fall11.jpg'
    },
    {
        'id': 12, 
        'category': 'Leaves', 
        'caption': 'Autumn leaves do not fall, they fly. They take their time and wander on this their only chance to soar.',
        'url': 'assets/img/Fall12.jpg'
    },
    {
        'id': 13, 
        'category': 'Peace', 
        'caption': 'The woods are ready for winter,s slumber as autumn colors fade.',
        'url': 'assets/img/Fall13.jpg'
    },
    {
        'id': 14, 
        'category': 'Peace', 
        'caption': 'The woods are ready for winter,s slumber as autumn colors fade.',
        'url': 'assets/img/Fall14.jpg'
    },
    {
        'id': 15, 
        'category': 'Sweets', 
        'caption': 'Autumn, the year,s last loveliest smile.',
        'url': 'assets/img/Fall15.jpg'
    },
    {
        'id': 16, 
        'category': 'Autumn', 
        'caption': 'Autumn, the year,s last loveliest smile.',
        'url': 'assets/img/Fall16.jpg'
    },
]
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petname = 'huy';
// tslint:disable-next-line: max-line-length
  petUrl = 'https://images.pexels.com/photos/1663421/pexels-photo-1663421.jpeg?cs=srgb&dl=adorable-animal-animal-photography-1663421.jpg&fm=jpg';

  updateName(value) {
    this.petname = value;
  }

  updatePetIMG() {
    this.petUrl = this.petUrl;
  }
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { faHeart , faGrinHearts } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
Fheart=faHeart;
  constructor() { }

  ngOnInit(): void {
  }

}

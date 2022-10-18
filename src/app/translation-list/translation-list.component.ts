import {Component, OnInit} from '@angular/core';
import {Translation} from '../translation';

@Component({
  selector: 'app-translation-list',
  templateUrl: './translation-list.component.html',
  styleUrls: ['./translation-list.component.css']
})
export class TranslationListComponent implements OnInit {
  public translations: Array<Translation> = [];

  constructor() {
  }

  ngOnInit(): void {
    // TODO: Get translations from API and transform result to match `this.translations`' type
    return;
  }
}

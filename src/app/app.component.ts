import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-assessment';

  constructor(public translate: TranslateService) {
    // TODO: Get all languages from the API
    translate.addLangs(['en']);

    translate.setDefaultLang('en');

    // TODO: Match current browser language against languages from API otherwise use a fallback
    translate.use('en');
  }
}

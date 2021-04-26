import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TranslationListComponent} from './translation-list/translation-list.component';

// TODO: Component should be display under `/translations`
// TODO: Any request should display this component
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

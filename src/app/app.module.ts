import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { EntryTestComponent } from './entry-test/entry-test.component';
import { SelfStudyComponent} from './self-study/self-study.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { StoriesComponent } from './stories/stories.component';
import { AudiosComponent } from './audios/audios.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { ButtonTextDirective } from './shared/button-text.directive';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entry-test', component: EntryTestComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'self-study', component: SelfStudyComponent },
  { path: 'self-study/:rule', component: RulesComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'audios', component: AudiosComponent },
  { path: 'self-study', component: SelfStudyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntryTestComponent,
    SelfStudyComponent,
    HeaderComponent,
    DropdownDirective,
    RegisterComponent,
    MoviesComponent,
    StoriesComponent,
    AudiosComponent,
    HomeComponent,
    RulesComponent,
    ButtonTextDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

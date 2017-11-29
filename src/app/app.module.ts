import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { EntryTestComponent } from './entry-test/entry-test.component';
import { SelfStudyComponent} from './self-study/self-study.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { StoriesComponent } from './stories/stories.component';
import { AudiosComponent } from './audio/audios.component';

const appRoutes: Routes = [
  { path: 'entry-test', component: EntryTestComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'self-study', component: SelfStudyComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'audios', component: AudiosComponent },
  { path: 'self-study', component: SelfStudyComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntryTestComponent,
    SelfStudyComponent,
    ContactComponent,
    HeaderComponent,
    DropdownDirective,
    RegisterComponent,
    MoviesComponent,
    StoriesComponent,
    AudiosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

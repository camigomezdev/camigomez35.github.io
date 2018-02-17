import { Routes } from '@angular/router';

import { AboutmeComponent } from './aboutme/aboutme.component';
import { LikemeComponent } from './likeme/likeme.component';
import { NewsComponent } from './news/news.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component'
import { GhComponent } from './ghcomponent/ghcomponent.component';


export const ROUTES: Routes = [
  { path: '', component: AboutmeComponent},
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'likeme', component: LikemeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: GhComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];
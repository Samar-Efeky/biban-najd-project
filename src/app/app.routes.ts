import { Routes } from '@angular/router';
import { HomePage } from './public-website-components/home-page/home-page';
import { AboutUs } from './about-us/about-us';
import { Services } from './services/services';
import { ContactUs } from './contact-us/contact-us';
import { Projects } from './projects/projects';

export const routes: Routes = [
    {
        path:'home', component:HomePage
    },
    {
        path:'about-us', component:AboutUs
    },
    {
        path:'services', component:Services
    },
    {
        path:'projects', component:Projects
    },
    {
        path:'contact-us', component:ContactUs
    },
    {
        path:'', redirectTo:'home', pathMatch:'full'
    },
];

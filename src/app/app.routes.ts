import { Routes } from '@angular/router';
import { HomePage } from './public-website-components/home-page/home-page';
import { AboutUs } from './public-website-components/about-us/about-us';
import { Services } from './public-website-components/services/services';
import { Projects } from './public-website-components/projects/projects';
import { ContactUs } from './public-website-components/contact-us/contact-us';

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

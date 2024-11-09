import { Routes } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';

export const routes: Routes = [
   
    {
        path : 'personal-info',
        component : PersonalInfoComponent
    },
    {
        path : 'contact-info',
        component : ContactInfoComponent
    },
    {
        path : 'additional-info',
        component : AdditionalInfoComponent
    },
    {
        path : '',
        redirectTo : 'personal-info',
        pathMatch : 'full'
    }
];

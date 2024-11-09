import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TestcaseComponent } from './testcase/testcase.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path : 'test',
        component : TestComponent,
        canActivateChild : [authGuard],
        children :   [
            {
            path : 'testcase',
            component : TestcaseComponent
            }
        ]
    },
    {
        path : 'testcase',
        component : TestcaseComponent,
        canActivate : [authGuard]
    },
    {
        path : '',
        component : TestComponent,
    },
    {
        path : '**',
        redirectTo : 'test'
    }

];

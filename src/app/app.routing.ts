import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { AdminComponent } from './admin/admin.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'Admin', component: AdminComponent},
    { path: 'post', component: PostComponent},

    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';
import { FoodsComponent } from './foods/foods.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { QueryComponent } from './query/query.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'foods', component: FoodsComponent },
  { path: 'recipes', component: FoodsComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'routines', component: ExercisesComponent },
  { path: 'conversations', component: ConversationsComponent },
  { path: 'query/food', component: QueryComponent },
  { path: 'query/exercise', component: QueryComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

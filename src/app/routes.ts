import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component'

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index'

export const appRoutes:Routes = [
    // If angular hits the /new path it will direct there, if we put that route first. If not it will try to match paths with events/:id if we put the events/new route below events/:id
    { path: 'events/new', component: CreateEventComponent,
      canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent, 
      canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'user', loadChildren: './user/user.module#UserModule'}
]
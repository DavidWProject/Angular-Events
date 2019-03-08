import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/shared/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'
import { EventListResolver } from './events/events-list-resolver.service'

export const appRoutes:Routes = [
    // If angular hits the /new path it will direct there, if we put that route first. If not it will try to match paths with events/:id if we put the events/new route below events/:id
    { path: 'events/new', component: CreateEventComponent,
      canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve:
      {events:EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, 
      canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]
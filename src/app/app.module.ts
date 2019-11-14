import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { TicketsComponent } from './tickets/tickets.component';
import { RepairsComponent } from './repairs/repairs.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MenuComponent } from './menu/menu.component';

// Routing
import {RouterModule, Routes} from '@angular/router';

// Material
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'repairs', component: RepairsComponent},
  {path: 'tickets', component: TicketsComponent},
  {path: 'tickets/:ticketId', component: TicketDetailsComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    TicketsComponent,
    RepairsComponent,
    TicketDetailsComponent,
    HomeComponent,
    NotfoundComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(
      appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSortModule,
    MatTableModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

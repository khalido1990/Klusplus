import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatIconRegistry } from '@angular/material';
import {tickets} from '../../tickets';
import {Ticket} from '../../ticket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  displayedColumns: string[] = ['ticketNumber', 'firstName', 'lastName', 'progress', 'details'];
  tickets = tickets;
  displayTickets: MatTableDataSource<Ticket>;
  constructor() {
    this.displayTickets = new MatTableDataSource<Ticket>(tickets);
  }

  ngOnInit() {
  }

}

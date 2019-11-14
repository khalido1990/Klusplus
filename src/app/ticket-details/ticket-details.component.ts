import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatIconRegistry } from '@angular/material';
import {tickets} from '../../tickets';
import {Ticket} from '../../ticket';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {
  ticket;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'mobileNumber', 'clientNumber', 'ticketNumber', 'category', 'date', 'progress'];
  displayTicket: MatTableDataSource<Ticket>;
  constructor(private route: ActivatedRoute) {
    this.displayTicket = new MatTableDataSource<Ticket>(tickets);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.ticket = tickets[+params.get('ticketId')];
    });
  }

}

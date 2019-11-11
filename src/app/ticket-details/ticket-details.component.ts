import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {tickets} from '../../tickets';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {
  ticket;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.ticket = tickets[+params.get('ticketId')];
    });
  }

}

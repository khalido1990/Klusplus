import { Component, OnInit } from '@angular/core';
import {tickets} from '../../tickets';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  displayedColumns: string[] = ['clientNumber', 'firstName', 'progress', 'color'];
  tickets = tickets;
  constructor() { }

  ngOnInit() {
  }

}

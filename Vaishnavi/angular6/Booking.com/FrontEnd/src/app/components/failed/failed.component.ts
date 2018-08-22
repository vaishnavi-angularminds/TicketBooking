import { Component, OnInit } from '@angular/core';
import { DbConnectServiceService } from '../../db-connect-service.service';
@Component({
  selector: 'app-failed',
  templateUrl: './failed.component.html',
  styleUrls: ['./failed.component.css']
})
export class FailedComponent implements OnInit {

  constructor(private _dbService:DbConnectServiceService) { }

  ngOnInit() {
    this._dbService.saveTicketStatus('Failed').subscribe((data) => {
         
    console.log('Data update ...');
    console.log(data);
   
  });;
  }

}

import { Component, OnInit } from '@angular/core';
import { UserInformationService } from '../../user-information.service';

import { Router } from '@angular/router'; 
import { DbConnectServiceService } from '../../db-connect-service.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
name:string;
email:string;
tickets=[];
  constructor(private _userInfo:UserInformationService,private router: Router,private _dbService:DbConnectServiceService) { }

  ngOnInit() {
    this.saveBookedTicket();
  }
  saveBookedTicket(){
   this.name=this._userInfo.getUserName();

   this.tickets=this._userInfo.getUserTicket();

   this.email=this._userInfo.getUserEmail();
    
    this._dbService.saveTicketStatus('Completed').subscribe((data) => {
         
      console.log('Data update ...');
      console.log(data);
     
    });
  }
}

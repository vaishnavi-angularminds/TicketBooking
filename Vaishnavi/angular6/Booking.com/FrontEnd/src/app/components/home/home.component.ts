import { Component, OnInit } from '@angular/core';
import { UserInformationService } from '../../user-information.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _userInfo:UserInformationService) { }
  

  setTotalNumTickets(tickets,cost){
    this._userInfo.setUserNumOfTickets(tickets);
    this._userInfo.setCostOfTickets(cost);
  }
  ngOnInit() {
  }




}

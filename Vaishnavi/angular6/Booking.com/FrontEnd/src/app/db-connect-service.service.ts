import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { UserInformationService } from './user-information.service';
import { UserInformation } from './userInformation.model';
@Injectable({
  providedIn: 'root'
})
export class DbConnectServiceService {
  _url='http://localhost:8081';
  constructor(private _http:HttpClient,private _userInfo:UserInformationService) { }
  date =this._userInfo.getUserDateOfEvent();
 

  getSeatsInformation(date) {
   
    console.log("Inside Db Service: Date = "+date);
   return this._http.get<any>(`${this._url}/Tickets/${date}`);
  }
  
  saveTicket(seatsReserved,name,email,phone,eventDate,cost){
    const userInfo ={
      seatsReserved:seatsReserved,
      name:name,
      email:email,
      phone:phone,
      status:'In Progress',
      eventDate:eventDate,
      costOfTicket:cost
    };
    return this._http.post(`${this._url}/process/`, userInfo);
  }


  saveTicketStatus(status) {
    var id = this._userInfo.getUserId();
    console.log(id);
    const updateStatus = {
            status: status
    }; 
    return this._http.put(`${this._url}/Ticket/${id}`,updateStatus);
  }
  
  checkTimeDiff(){
    var id=this._userInfo.getUserId();
    return this._http.get<any>(`${this._url}/Ticket/${id}`);
  }

  registeredAuthentically(){
    return !!localStorage.getItem('token')
  }
  
}

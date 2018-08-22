import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
 

  private userTicket:[string];
  private userName:string;
  private userEmail:string;
  private userPhone:string;
  private dateOfEvent:Date;
  private userId:string;
  private numOfTickets:Number;
  private costOfTickets:Number;
  private userCreatedAt:Date;

  constructor() { }

  setUserTicket(ticket){
    console.log("ticket"+ticket);
    this.userTicket = ticket;
  }

  getUserTicket(){
    return this.userTicket;
  }

  setUserName(name){
    console.log("name"+name);
    this.userName = name;
  }

  getUserName(){
    return this.userName;
  }
  setUserEmail(email){
    console.log("email"+email);
    this.userEmail = email;
  }

  getUserEmail(){
    return this.userEmail;
  }
  setUserPhone(phone){
    console.log("phone"+phone);
    this.userPhone = phone;
  }

  getUserPhone(){
    return  this.userPhone;
  }
  setUserDateOfEvent(eventDate){
    console.log("eventDate"+eventDate);
    this.dateOfEvent = eventDate;
  }

  getUserDateOfEvent(){
    return this.dateOfEvent;
  }
  setUserNumOfTickets(numTickets){
    console.log("numTickets"+numTickets);
    this.numOfTickets = numTickets;
    console.log("this.numOfTickets:"+this.numOfTickets);
  }

  getUserNumOfTickets(){
    return this.numOfTickets;
  }
  setUserId(id){
    console.log("id"+id);
    this.userId = id;
  }

  getUserId(){
    return this.userId;
  }
  setCostOfTickets(cost){
    console.log("cost"+cost);
    this.costOfTickets = cost;
  }

  getCostOfTickets(){
    return this.costOfTickets;
  }
  setCreatedAt(date){
    this.userCreatedAt = date;
  }

  getCreatedAt(){
    return  this.userCreatedAt;
  }
  adduserInfo(selectedSeats,name,email,phone,eventDate,cost){
    this.userTicket=selectedSeats;
    this.userName=name;
    this.userEmail=email;
    this.userPhone=phone;
    this.dateOfEvent=eventDate;
    this.costOfTickets = cost;
    console.log("this.userTicket="+selectedSeats+"; "+
    "this.userName"+name+"; "+
    "this.userEmail"+email+"; "+
    "this.userPhone"+phone+"; "+
    "this.dateOfEvent"+eventDate);
  }

}

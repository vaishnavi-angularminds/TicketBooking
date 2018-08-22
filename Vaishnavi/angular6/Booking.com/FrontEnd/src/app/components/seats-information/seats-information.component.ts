import { Component, OnInit } from '@angular/core';
import { UserInformationService } from '../../user-information.service';

import { Router } from '@angular/router'; 
import { DbConnectServiceService } from '../../db-connect-service.service';

@Component({
  selector: 'app-seats-information',
  templateUrl: './seats-information.component.html',
  styleUrls: ['./seats-information.component.css']
})
export class SeatsInformationComponent implements OnInit {
   requiredTickets:Number;
  totalCost :Number;
  selectedSeats=[];
  name:String;
   phone:String;
  email:String;
  //eventDate:Date;
 eventDate;
 date;
  previouslyDisabled=[];

  constructor(private _userInfo:UserInformationService,private router: Router,private _dbService:DbConnectServiceService) { }

  ngOnInit() {

      
     this.eventDate = new Date().toISOString().split('T')[0];
     
      console.log("this.eventDate:"+this.eventDate);
      this.initialDate();
     
  }

  initialDate(){
   this.date = new Date(this.eventDate);
  
   this.date  = new Date(this.eventDate).getFullYear()+'-'+(new Date(this.eventDate).getMonth()+1)+'-'+(new Date(this.eventDate).getDate());
   this.date = new Date(this.date );
   var newDate = new Date();
  
  newDate.setTime(this.date .getTime());
 //
  this.getSeatsInformation(newDate.toISOString());
  console.log("Initial Date----")
  console.log(newDate);
  console.log(newDate.toISOString());


   this.requiredTickets = this._userInfo.getUserNumOfTickets();
   this.totalCost= this._userInfo.getCostOfTickets();
   
  }

  getSeatsInformation(date){
    console.log("Event Date--->"+date);

      this._dbService
        .getSeatsInformation(date)
        .subscribe((data) => {
       
          console.log('Data requested ...');
          console.log(data);
          
       
       var allData = data.docs;
         var seats=[];
         allData.forEach(function(value, key) {
			                
                seats.push(value.seatsReserved);
         }) 
         console.log("this.displayUnavailableSeats : "+seats);
         this.displayUnavailableSeats(seats);
        
     
    })
}

setTotaltickets(tickets){
  this._userInfo.setUserNumOfTickets(tickets);
  this.changeCostOnSeatChange(tickets);
}

OnDateSelect(){

 var newDate= new Date(this.eventDate);
    
  var  date = new Date(newDate.getFullYear()+'-'+(newDate.getMonth()+1)+'-'+(newDate.getDate()));
    console.log("Changed Date----");
    newDate.setTime(date.getTime());
    //this.eventDate =newDate.toISOString() ;
    console.log(newDate.toISOString());
  this.getSeatsInformation(newDate.toISOString());
 
 
}
refreshSelected(tickets){

  this.selectedSeats.forEach(function(value, key) {
   
    var myEl =  document.querySelector( '#'+value );
    myEl.classList.remove('selected'); 
   // this.changeCostOnSeatChange(tickets);
  
  
})
this.selectedSeats = [];
}
isSeatAlreadySelected(seatNumber){
  console.log("checking if already selected");
  var returnValue = 'false';
  this.selectedSeats.forEach(function(value) {
         if(value===seatNumber){
             console.log("returning true");
             returnValue= 'true';
         }   
      }) 
    console.log(returnValue);
      return returnValue;
  };
  selectThisSeat (seatNum){
     console.log("seatNumseatNum"+seatNum);
     
     if(this.isSeatAlreadySelected(seatNum)=== 'true'){
       console.log("seatNumseatNum before Slicing seat Number "+this.selectedSeats);   
         var index = this.selectedSeats.indexOf(seatNum);
         this.selectedSeats.splice(index, 1); 
  
     }
     else{
             if(this.selectedSeats.length < this.requiredTickets)
             {
                  this.selectedSeats.push(seatNum);
                 console.log("selected Seats "+this.selectedSeats);
             }
             else{
                 this.toggleClass(this.selectedSeats[0]);
                 this.selectedSeats.shift();
                 this.selectedSeats.push(seatNum);
                 console.log("selected Seats after Shifting seat Number "+this.selectedSeats);
              }
     }
 
 };
 toggleClass(id) {
  console.log("Inside toggle class");
  var myEl = document.getElementById(id);

  if( myEl.classList.contains('selected')){
    myEl.classList.remove('selected'); 
  
  }
  else{
    myEl.classList.add('selected'); 
  }
 
 
};

displayUnavailableSeats(seats){
var previous = this.previouslyDisabled;
  if(this.previouslyDisabled.length >0)
 {
  this.previouslyDisabled.forEach(function(value, key) {
      console.log("Removing no-available class "+value);
      var myEl =  document.querySelector( '#'+value );
      myEl.classList.remove('no-available'); 
        
   })
   this.previouslyDisabled=[];
 } 
      
      
     

 seats.forEach(function(value, key) {
      console.log("Value from response to disable"+value);
      var unavailable=value;
      unavailable.forEach(function(value, key) {
          console.log("Value from response to disable"+value);
          var myEl = document.getElementById(value);
           myEl.classList.add('no-available');
          previous[key]=value;
          console.log("this.previouslyDisabled[key] : "+previous[key]);
      })
     
   }) 

  
  
};
sendUserInfo=function(){
  var newDate= new Date(this.eventDate);
    
  var  date = new Date(newDate.getFullYear()+'-'+(newDate.getMonth()+1)+'-'+(newDate.getDate()));
    console.log("Changed Date----");
    newDate.setTime(date.getTime());
    this.eventDate=newDate;
 
  this._dbService.saveTicket(this.selectedSeats,this.name,this.email,this.phone,this.eventDate,this.totalCost)
  .subscribe((data) => {
         
    console.log('Data created ...');
    console.log(data);
    //console.log(data.docs);
    localStorage.setItem('token',data.token);
    this._userInfo.setCreatedAt(data.docs.createdAt);
    this._userInfo.setUserId(data.docs._id);
    this._userInfo.adduserInfo(this.selectedSeats,data.docs.name,data.docs.email,data.docs.phone,data.docs.eventDate,data.docs.totalCost);
    this.router.navigate(['/paymentGateway']);
  });
  
  
};

changeCostOnSeatChange(ticket){
  ticket=parseInt(ticket);
  console.log("tickets :"+ticket);
  switch(ticket){
    case 1:
           this.totalCost = 300;
           break;
    case 2:
           this.totalCost = 600;
           break;
    case 3:
           this.totalCost = 900;
           break;
    case 5:
           this.totalCost = 1500;
           break;


  }

  console.log( this.totalCost);
}

}

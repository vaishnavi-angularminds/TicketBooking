import { Component, OnInit } from '@angular/core';
import { UserInformationService } from '../../user-information.service';
import {UserInformation} from '../../userInformation.model'
import { Router } from '@angular/router'; 
import { DbConnectServiceService } from '../../db-connect-service.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

 operator:string;
 firstNumber:number;
 secondNumber:number;
 correctAnswer:number;
 userAnswer:number;
 found = false;
 lessTime ;
  seats=[];
  constructor(private _userInfo:UserInformationService,private router: Router,private _dbService:DbConnectServiceService) { }

  ngOnInit() {
    this.initializeEquation();
  }
   
    initializeEquation(){

      var  firstNum = Math.floor(Math.random()*100) + 1;
      var   secondNum  = Math.floor(Math.random()*100) + 1;
      var operatorArray=['+','-'];
      var randomNumber = Math.floor(Math.random()*operatorArray.length);
        if(randomNumber==0)
        {
            this.operator='+';
            
           this.firstNumber = firstNum;
           this.secondNumber = secondNum;
            this.correctAnswer=this.firstNumber +this.secondNumber;
        }else{
           this.operator="-";
            console.log("Subtract");
            if(firstNum > secondNum){
               this.firstNumber = firstNum;
               this.secondNumber = secondNum;
                this.correctAnswer=this.firstNumber -this.secondNumber;
                
            }else{
                this.initializeEquation();
                console.log("recurssion..............")
            }
        }
        console.log("Correct Answer"+this.correctAnswer);
      };

      getSeatsInformation(date){
        console.log("Event Date--->"+date);
    
    
    
          this._dbService
            .getSeatsInformation(date)
            .subscribe((data) => {
             
              console.log(data);
           var  allData = data.docs;
              console.log("Checking Again _____");
               var ticketbooked = this.seats; 
              allData.forEach(function(value, key) {
                        if(value.status == 'Completed') {
                            var data= value.seatsReserved;
                            data.forEach(function(value,key){
                               ticketbooked.push(value);
                           })
                           
                        }          
                       
                }) 
                this.seats = ticketbooked;
                console.log("Seats");
                console.log(this.seats);
                console.log(this.seats.length);
             
                var bookedTickets=this._userInfo.getUserTicket();
                console.log(bookedTickets);
               for (var i = 0; i < this.seats.length; i++) {
               console.log("inside for");
               if (bookedTickets.indexOf(this.seats[i]) !== -1) {
                   this.found = true;
                   console.log(this.seats[i]+" found:");
                   console.log( this.found);
                   break;
               }
               
           } 
           this.checkTime();
        })
    }
    
    IfAlreadyBooked(){
         this.getSeatsInformation(this._userInfo.getUserDateOfEvent());
    }
    checkTime(){
        this._dbService.checkTimeDiff().subscribe((data) => {
         
            console.log('Data created ...');
            console.log(data.status);
             if(data.status == 'success'){
                   this.lessTime = "true";
                   console.log(this.lessTime);
             }else{
              this.lessTime = "false";
              console.log(this.lessTime);
             }
             this.checkAnswer();
          });
    }
    checkAnswer(){

       
        if(this.lessTime == "true"){
          console.log("If 1");
          if(this.correctAnswer==this.userAnswer && ! this.found){
              console.log("If 2");
              this.router.navigate(['/paymentSuccess']);
             
          }else{
              console.log("If 3");
              this.router.navigate(['/paymentFailure']);
                  
                 
              }
      }else{
          console.log("If 4");
          this.router.navigate(['/paymentFailure']);
         
      } 
  }
 

    }



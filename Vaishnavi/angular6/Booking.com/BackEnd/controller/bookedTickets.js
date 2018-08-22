var bookedTicketModel = require('../models/bookedTicket');

//const jwt = require('jsonwebtoken');

var bookedTickets = {
	getAll:function(req,res){
			var dt= new Date(req.params.date);
			console.log(req.params.date);
			bookedTicketModel.find({ "$expr":
			{ "$and":
			   [
				   { "$eq": ["$eventDate", dt]},
				   {"$or": 
					   [ { "$eq": ["$status", "Completed"] }, 
						 {"$and":[
							 {"$eq": ["$status", "In Progress"]},
							 {$lt: [ {$subtract: [ new Date(), "$createdAt" ]}, 180000 ]}
							]
						} 
					   ] 
					}
			   ]  
			}
		   },{seatsReserved:1,status:1,_id:0}
				
				,function(err,docs){

				if(err){
					res.status(500).json({status:"error",message:"Database Error" + err,docs:""});
				}else{
					res.status(200).json({status:"success",docs:docs});
				}
			});
		},
		getOne:function(req,res){
			bookedTicketModel.findById(req.params.id,{createdAt:1,_id:0},function(err,doc){

				if(err){
					res.status(500).json({status:"error",message:"Database Error" + err,doc:""});
				}else{
					res.status(200).json({status:"success",doc:doc});
				}
			});
		}, 
		create:function(req,res){
			var bookedTicket = new bookedTicketModel();
			console.log("Database me create hone jaa raha he...");
			//bookedTicket.firstName =req.body.firstName;
			bookedTicket.name=req.body.name;
			bookedTicket.email=req.body.email;
			bookedTicket.seatsReserved=req.body.seatsReserved;
			bookedTicket.phone=req.body.phone;
			bookedTicket.eventDate=req.body.eventDate;
			bookedTicket.status=req.body.status;
			bookedTicket.costOfTicket = req.body.costOfTicket;

			

			
			bookedTicket.save(function(err,userDetails){
				if(err){
					res.status(500).json({status:"error",message:"Database Error" + err,docs:""});
				}else{
					/* let payload = { subject : userDetails._id }
					let token = jwt.sign(payload , 'secretKey'); */

					//res.status(200).json({status:"Data Added Successfully",docs:userDetails,token});
					res.status(200).json({status:"Data Added Successfully",docs:userDetails});
					//res.send({token});
				}
			});
		},

		update:function(req,res){

			bookedTicketModel.findById(req.params.id,function(err,doc){
				if(err)
					res.status(500).json({status:"error",message:"Database Error" + err,doc:""});
				
				doc.status =req.body.status;
				
				//console.log(doc);
				//save the doc
				doc.save(function(err){
					if(err){
						res.status(500).json({status:"error",message:"Database Error" + err,doc:""});
					}else{
						res.status(200).json({status:"Data Updated Successfully",doc:doc});
					}
				});


			});
			
		},
		checkTime:function(req,res){
			bookedTicketModel.findById(req.params.id,{$lt: [ {$subtract: [ new Date(), "$createdAt" ]}, 180000 ]},{createdAt:1,_id:0},function(err,doc){
			
			
				if(err){
					res.status(500).json({status:"error",message:"Database Error" + err,doc:""});
				}else{
					res.status(200).json({status:"success",doc:doc});
					console.log(doc);
					console.log(res);
				}
			})
		},
		delete:function(req,res){

			bookedTicketModel.remove({_id:req.params.id},function(err,doc){

				
					if(err){
						res.status(500).json({status:"error",message:"Database Error" + err,doc:""});
					}else{
						res.status(200).json({status:"Data deleted Successfully",doc:doc});
					}
				
			});
		}


};

module.exports = bookedTickets;
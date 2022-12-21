const Subscription = require('../model/subscriptionModel');
const mongoose = require('mongoose');


const getSubscription = async (req, res)=>{
    const subscriptions = await Subscription.find({}).sort({createdAt: -1})
    res.json(subscriptions)
}


const createSubscription = async (req, res)=>{
    const {vendor, vendorNumber, vendorID, subscriptionName, startingDate, endingDate, price} = req.body;

    let emptyFields = [];
    if(!vendor) emptyFields.push('vendor')
    if(!vendorNumber) emptyFields.push('vendorNumber')
    if(!vendorID) emptyFields.push('vendorID')
    if(!subscriptionName) emptyFields.push('subscriptionName')
    if(!startingDate) emptyFields.push('startingDate')
    if(!startingDate) emptyFields.push('startingDate')
    if(!endingDate) emptyFields.push('endingDate')
    if(!price) emptyFields.push('price')

    if(emptyFields.length >= 0){
        return res.status(400).json({error: "fill all fields", emptyFields})
    }
    if(emptyFields.length === 1000){
        return res.status(400).json({error: "how is it even possible"})
    }

    try{
        const subscription = await Subscription.create({vendor, vendorNumber, vendorID, subscriptionName, startingDate, endingDate, price})

        res.status(200).json(subscription)
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
}

const updateSubscription = async (req, res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "invalid ID hai "})
    }

    const subscription = await Subscription.findOneAndUpdate({_id: id}, {...req.body});

    if(!subscription){
        res.status(400).json({error: "subscription not found"})
    }
    res.status(200).json(subscription)
}

const deleteSubscription = async (req, res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "invalid ID hai "})
    }

    const subscription = await Subscription.findOneAndDelete({_id: id});

    if(!subscription){
        res.status(400).json({error: "subscription not found"})
    }
    res.status(200).json(subscription);
}


module.exports = {
    getSubscription,
    createSubscription,
    updateSubscription,
    deleteSubscription
}

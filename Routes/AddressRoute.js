const express=require('express')
const AddressRouter=require('express').Router()
const {Create,getSingleAddress}=require("../service/AddressService")

AddressRouter.post('/create',Create)
AddressRouter.get('/:id',getSingleAddress)


module.exports=AddressRouter
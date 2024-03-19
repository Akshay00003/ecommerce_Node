const express = require("express");
const { Create, GetSingleProfile } = require("../service/ProfileService");
const ProfileRouter = require("express").Router();

ProfileRouter.post("/create", Create);
ProfileRouter.get("/:id", GetSingleProfile);

module.exports = ProfileRouter;

const express = require("express");
const router = express.Router();


const {
    getAllCommunities,
    getCommunity,
    createCommunity,
    updateCommunity,
    deleteCommunity

}= require("../controllers/community");

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");



router.post("/community/create/",

createCommunity
);

router.get("/community/all",isSignedIn,isAuthenticated,isAdmin,getAllCommunities);




router.get("/community/:commId",isSignedIn,isAuthenticated,isAdmin,getCommunity);

router.post("/community/:commId",isSignedIn,isAuthenticated,isAdmin,updateCommunity);

router.delete("/community/:commId",isSignedIn,isAuthenticated,isAdmin,deleteCommunity)


module.exports=router;

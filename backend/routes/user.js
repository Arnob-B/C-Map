const { Router } = require("express");
const router = Router();
const allmiddleware = require("../middleware/user");
const jwt = require('jsonwebtoken')
const jwtsecret = process.env.JWTSECRET
// const allsanitizer = require("../middleware/sanitizer");

// User Routes
router.post('/signup',allmiddleware.create_user, (req, res) => {
    // Implement user signup logic
    res.status(200).json({
        "msg": "User Created successfully",
    });
});
router.post('/signin',allmiddleware.check_user,(req,res)=>{
  const key = jwt.sign({username:req.headers.username},jwtsecret);
  res.status(200).json({jwtkey:key});
})

router.get('/getusername',(req,res)=>{
    res.status(200).json({
        "username":req.myobj.username,
    });

})

module.exports = router;
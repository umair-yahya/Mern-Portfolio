const {dbAdmin} = require("../mongodb")


async function postAdmin(req,res){
    const data = await dbAdmin();
    const {email,pass} = req.body;
    const existEmail = await data.findOne({email});
    try{
        if(existEmail && existEmail.pass == pass){
            res.status(200).send({
                status:true,
                message:"Login Successfully"
           });
        }else{
            res.status(200).send({
                status:false,
                message:"Check email and password"
           });
        }
    //   await data.insertOne({email,pass});
    }catch(err){
        res.status(400).send({
            status: false,
            message: err
        })
    }
}


module.exports = {postAdmin}
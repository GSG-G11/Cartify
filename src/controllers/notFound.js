const notFound=(req,res)=>{
    res.status(404).json("not found")  
}
module.exports={notFound}
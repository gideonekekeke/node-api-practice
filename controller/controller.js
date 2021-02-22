const usersModel = require('../Model/Model')



//creating all the get, post, put, delete functions


const gettingAll = async (req, res) =>{
  try{
    const getData = await studentModel.find()
    res.status(200).json(getData)
  }
  catch(err){
    res.status(400).json({message : err.message})
  }
}

const creating = async (req, res)=>{
  try{
  const postData = await studentModel.create({
    name : req.body.name,
    email : req.body.email,
    photo : req.file.path
  })
  res.status(200).json({postData})
  }
  catch(err){
    res.status(400).json({message : err.message})

}




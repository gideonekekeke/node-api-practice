const usersModel = require('../Model/Model')



//creating all the get, post, put, delete functions


const gettingAll = async (req, res) =>{
  try{
    const getData = await usersModel.find()
    res.status(200).json(getData)
  }
  catch(err){
    res.status(400).json({message : err.message})
  }
}

const creating = async (req, res)=>{
  try{
  const postData = await usersModel.create({
    name : req.body.name,
    email : req.body.email,
    photo : req.file.path
  })
  res.status(200).json({postData})
  }
  catch(err){
    res.status(400).json({message : err.message})

}

const gettingID = async (req, res)=>{
  try{
  const getID = await usersModel.get(req.params.id)
  res.status(200).json(getID)
  }
  catch(err){
    res.status(400).json({message : err.message})
}


const deleteStudent = async (req, res) =>{
  try{
     const del = await usersModel.findByIdAndDelete(req.body.id)
     res.status(200).json(del)
  }
  catch(err){
    res.status(400).json({message : err.message})
}



const delectingAll = async (req, res) => {
  try {
    const delAll = await usersModel.deleteMany();
    res.json({ message: "all student has been delected" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports ={
  gettingAll,
  creating,
  gettingID,
  deleteStudent,
  delectingAll
}
const { Message } = require("../Models/messageSchema");

const getAllMessages = async (req,res)=>{
    const allMessages = await Message.find({},"sender message receiver updatedAt").sort('-updatedAt');
    res.status(200).json({
      messages:allMessages
    });
};

const postMessage=async (req,res)=>{
    const {sender,message, receiver} = req.body;

    console.log('req ; ',req.body);
    const msg = new Message({
        sender,message, receiver
      });
      try {
        const newMsg = await msg.save();
        res.status(201).json({ newMsg });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }       
}

const getMessage=async (req,res)=>{
  const {id} = req.params;
  console.log(id);
  const message = await Message.findById(id,"sender message receiver").exec();
  res.status(200).json(message);
}

const deleteMessage=async (req,res)=>{
   const {id} = req.params;
  const deletedData = await Message.findByIdAndDelete(id).exec();
  res.status(200).json({
    message:"Data deleted Successfully",
    data:deletedData
  })
}

const updatePatchMessage=async(req,res)=>{
    const {id} = req.params;
    const {sender, message, receiver} = req.body;
    
    const foundMessage = await Message.findById(id).exec();

    if(!foundMessage){
      res.status(404).json({
        message:"Record with id : "+id+" Not Found"
      })
    }

    let query = {$set: {}};
  for (let key in req.body) {
    if (foundMessage[key] && foundMessage[key] !== req.body[key]) // if the field we have in req.body exists, we're gonna update it
       query.$set[key] = req.body[key];
  }

  const updateMessage = await Message.findByIdAndUpdate(id,query,{new:true}).exec();

  console.log("updateMessage",updateMessage);

    res.status(200).json({
      message:"Data updated successfully",
      data:updateMessage
    })
  

 

}

module.exports = {
  getAllMessages,postMessage,getMessage,deleteMessage,updatePatchMessage
}
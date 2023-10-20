const { Message } = require("../Models/messageSchema");

const getMessages = (req,res)=>{
    res.status(200).send('Get messages');
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

module.exports = {
    getMessages,postMessage
}
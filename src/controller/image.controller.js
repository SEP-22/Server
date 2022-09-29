const sharp = require("sharp");

const addImage = async (req, res) => {
 
  
  try {
      // console.log(req.file);
      const buffData = await sharp(req.file.buffer)
      .resize({ width: 300, height: 300 })
      .toBuffer();

      console.log(buffData);
      
    res.send(req.file.buffer);
  } catch (error) {
    res.status(400).send();
  }
};

module.exports = { addImage };

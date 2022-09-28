const sharp = require("sharp");

const addImage = async (req, res) => {
  const { category, courseId } = req.body;
  const _id = req.params.id;
  
  try {
    //   console.log(req.file);
      const buffData = await sharp(req.file.buffer)
      .resize({ width: 300, height: 300 })
      .toFormat("jpeg", { mozjpeg: true })
      .toBuffer();
    res.send(buffData);
  } catch (error) {
    res.status(400).send();
  }
};

module.exports = { addImage };

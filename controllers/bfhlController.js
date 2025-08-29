const { processData } = require('../models/bfhlModel');

exports.bfhlPost = (req,res) =>{
  try{
    const data = req.body.data || [];
    const result = processData(data);
    res.status(200).json(result);
  } catch (err){
    res.status(200).json({
      is_success: false,
      user_id: 'Shashwat_22BCE8168',
      email: 'iamsoranic@gmail.com',
      roll_number: '22BCE8168',
      odd_numbers: [],
      even_numbers: [],
      alphabets: [],
      special_characters: [],
      sum: "0",
      concat_string: ""
    });
  }
};

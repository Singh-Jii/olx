const Classify = require('../model/classified_model');


exports.get_classify = async (requrest, response) => {


  try {

    const classify = await Classify.find();

    response.status(200).json(classify);


  } 
  
  
  catch (er) {

    console.log(er);

    response.status(500).json({ msg: 'Error' });


  }


};


exports.post_classify = async (request, response) => {


  try {


    const { my_nam, my_desc, my_catego, my_img, my_loc, postedAt, my_rs } = request.body;


    const new_classify = new Classify({my_nam,my_desc,my_catego,my_img,my_loc,postedAt,my_rs,});


    await new_classify.save();

    response.status(201).json({ msg: 'Classified post completed' });


  } 
  
  
  catch (er) {


    console.log(er);


    response.status(500).json({ msg: 'Error' });


  }


};


exports.chnge_classify = async (request, response) => {


  try {


    const { id } = request.params;

    const chnge_info = request.body;

    await Classify.findByIdAndUpdate(id, { $set: chnge_info });

    response.status(200).json({ msg: 'Classified change completed' });


  } 
  
  
  catch (er) {


    console.log(er);

    response.status(500).json({ msg: 'Error' });


  }


};


exports.del_classify = async (request, response) => {


  try {


    const { id } = request.params;

    await Classify.findByIdAndDelete(id);

    response.status(200).json({ msg: 'Classified deletion completed' });


  } 
  
  catch (er) {


    console.log(er);

    response.status(500).json({ msg: 'Error' });


  }

  
};

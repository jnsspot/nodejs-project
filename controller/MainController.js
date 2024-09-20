const main={
    index:(req,res)=>{
        res.render('index');
    },
    address:(req,res) =>{
        res.render('address');
    },
    contact:(req,res) =>{
        res.render('contact');
    },
    gender:(req,res) =>{
        res.render('gender')
    },
    email:(req,res) =>{
        res.render('email')
    },
  
  
};

module.exports = main;
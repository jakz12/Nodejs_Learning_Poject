const router = require('express').Router();
let exercise  =  require('../models/exercise.model');

router.route('/:uid?').get((req,res)=>{
    var uid = req.params.uid;
    var qry = uid == undefined ? {} : { _id: uid };

    exercise.find(qry).then(exercises => res.json(exercises)).catch(err => res.status(400).json('Error : '+ err));
});

router.route('/delete/:uid').get((req,res) => {
    exercise.findByIdAndDelete(req.params.uid).then(exercises => res.json('Exercise Deleted')).catch(err => res.status(400).json('Error : '+ err));
});

router.route('/add').post((req,res)=>{

    const userName = req.body.userName;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = req.body.date;


    const newExercise = new exercise({userName,description,duration,date});

    newExercise.save().then(() => res.json('Exercise Added')).catch(err => res.status(400).json('Error : '+ err));
});

module.exports = router;
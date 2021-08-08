const router = require('express').Router();
const users = require('./../data/mockData');

//Getting user based on userId
router.get('/:userId', (req, res) => {
    const {params:{userId}={}} = req;
    const index = users.filter(item => item.userId == userId);
    res.json(item);
})

//get all the user
router.get('/', (req, res) => {
    res.json({people: users, message: 'success'});
    // console.log('Get request');
})

//upload a new user
router.post('/', (req, res) => {
    const {body:{userId,name,type,address,houseNumber,city,state}={}} = req;
    // console.log(req.body);
    if(!userId || !name || !type){
        res.json({message: 'invalid entry'});
    }
    users.push(req.body);
    res.json({message: 'data inserted'});
})

//update a user
router.put('/', (req, res) => {
    const {body:{userId,name,type,address,houseNumber,city,state}={}} = req;
    const index = users.findIndex(item => item.userId == userId);
    users.splice(index, 1, {userId,name,type,address,houseNumber,city,state});
    res.json({message: 'updated successfully'});
})

//delete a user
router.delete('/:userId', (req, res) => {
    const {params:{userId}={}} = req;
    const index = users.findIndex(item => item.userId == userId);
    // console.log(userId, index);
    if(index < 0){
        res.json({message: 'deletion not successful'});
    }
    users.splice(index, 1);
    res.json({message: 'Done successfully'});
})

module.exports = router
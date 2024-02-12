const express = require ("express")
const router = express.Router()
voitures = [{id:1,name:"clio"},{id:2,name:"megane"},{id:3,name:"range"}]

router.post('/add', (req, res) => {

  });
  
  router.get('/all', (req, res) => {
      res.json(voitures) ; 
  });

  router.get('/delete/:id ', (req, res) => {
    const id = parseInt(req.params["id "]);
voitures.array.forEach(element => {
    if (element.id === id ) {
        voitures.filter(e=> e.id != id  );
    }
});
      
  });
  router.get('/vbyid/:id ', (req, res) => {
    const id = parseInt(req.params["id "]);
const v1 = voitures.find(e => e.id === id )
res.json(v1) ;

  });   


  module.exports = router
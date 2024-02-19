const e = require("express");
const express = require ("express")
const router = express.Router()
const voitures = [{id:1,name:"clio"},{id:2,name:"megane"},{id:3,name:"range"}]
router.get('/', (req, res) => {
  
 
   res.json(voitures) ;
});
  router.get('/voi/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log (id ) 
    const v1 = voitures.find(e => e.id === id )
     res.json(v1) ;
  });   

router.delete('/remove/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    let voitures = array.filter(item => item.id !== id);
     res.json(voitures) ;
  }); 
  
  router.put('/update/:id', (req, res) => {
    const id1 = parseInt(req.params.id);
     const updatedItem = req.body;
     if (voitures.find(e => e.id===id1)!=null) {
      
     var  voiture = voitures.find (e =>e.id === id1 ) ;
     voiture.name = req.body.name ; 
      res.json("UPDATE DONE ") ;
    

  } else {
    res.json("Erreur") ;
  }

});



  module.exports = router